import Joi from 'joi';

const updateupdateUserSchema = Joi.object ({
    full_name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(6).optional(),
    phone: Joi.string().optional().allow(""),
    role: Joi.string().optional(),
    status: Joi.string().optional()
})

class updateUserRequests {
    constructor(data) {
        this.full_name = data.full_name
        this.email = data.email
        this.password = data.password
        this.phone = data.phone
        this.role = data.role
        this.status = data.status
    }

    static validate(data) {
        return updateupdateUserSchema(data)
    }
}

export default updateUserRequests;