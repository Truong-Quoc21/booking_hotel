import { Sequelize } from "sequelize";
const { Op } = Sequelize;
import db from "../models/index.js";
import insertUserRequests from '../dtos/requests/user/insertUserRequests.js'
import updateUserRequests from "../dtos/requests/user/updateUserRequests.js";
import userResponese from '../dtos/responese/user/userResponese.js'
import argon2 from 'argon2'

export async function getUsers(req, res) {
    try {
        const { search = '', page = 1, limit } = req.query;
        const pageSize = limit ? parseInt(limit) : 10;
        const offset = (page - 1) * pageSize;

        let whereClause = {};
        if (search.trim() !== '') {
            whereClause = {
                [Op.or]: [
                    {full_name: {[Op.like]: `%${search}%`}},
                    {email: {[Op.like]: `%${search}%`}}
                ]
            };
        }

        const [users, totalusers] = await Promise.all([
            db.User.findAll({
                where: whereClause,
                limit: pageSize,
                offset: offset,
                attributes: { exclude: ['password'] }
            }),
            db.User.count({ where: whereClause })
        ]);

        res.status(200).json({
            message: 'Lấy danh sách khách hàng thành công',
            data: users,
            currentPage: parseInt(page, 10),
            totalPages: Math.ceil(totalHotels / pageSize),
            totalUsers
        });
    } catch (error) {
        res.status(500).json({ message: 'Xảy ra lỗi', error: error.message });
    }
}

export async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await db.User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy khách hàng này' });
        }

        res.status(200).json({
            message: 'Lấy thông tin khách hàng thành công',
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: 'Xảy ra lỗi', error: error.message });
    }
}

export async function insertUser(req, res) {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body]

        for (const item of data) {
            const existingUser = await db.User.findOne({ where: { email: item.email } });
            if (existingUser) {
                return res.status(409).json({
                    message: `Email ${item.email} đã tồn tại`
                });
            }

            const hashedPassword = await argon2.hash(item.password)
            const { full_name, email, phone, role, status } = item

            await db.sequelize.query(
                `INSERT INTO users (full_name, email, password, phone, role, status, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
                {
                    replacements: [full_name, email, hashedPassword, phone, role ?? 'customer', status ?? 'active'],
                    type: db.Sequelize.QueryTypes.INSERT
                }
            )
        }

        return res.status(201).json({
            message: 'Thêm khách hàng thành công'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Xảy ra lỗi',
            error: error.message
        })
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleted = await db.User.destroy({ where: { id } });
        if (deleted) {
            return res.status(200).json({ message: 'Xoá khách hàng thành công' })
        } else {
            return res.status(404).json({ message: 'Khách hàng không tìm thấy' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Xảy ra lỗi', error: error.message })
    }
}

export async function updateUser(req, res) {
    try {
        const data = { ...req.body }

        const { error } = updateUserRequests.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: 'Dữ liệu không hợp lệ',
                error: error.details[0].message
            })
        }

        if (data.password) {
            data.password = await argon2.hash(data.password)
        }

        const { id } = req.params
        const updated = await db.User.update(data, { where: { id } });
        if (updated[0] > 0) {
            return res.status(200).json({ message: 'Cập nhật khách hàng thành công' })
        } else {
            return res.status(404).json({ message: 'Khách hàng không tìm thấy' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Xảy ra lỗi', error: error.message })
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body

        const user = await db.User.findOne({ where: { email } })
        if (!user) {
            return res.status(401).json({ message: 'Email không tồn tại' })
        }

        if (user.status === 'banned') {
            return res.status(403).json({ message: 'Tài khoản đã bị khoá' })
        }

        if (user.status === 'inactive') {
            return res.status(403).json({ message: 'Tài khoản chưa được kích hoạt' })
        }

        const isValid = await argon2.verify(user.password, password)
        if (!isValid) {
            return res.status(401).json({ message: 'Mật khẩu không đúng' })
        }

        const { password: _, ...data } = user.toJSON()
        res.status(200).json({
            message: 'Đăng nhập thành công',
            data
        })
    } catch (error) {
        res.status(500).json({ message: 'Xảy ra lỗi', error: error.message })
    }
}