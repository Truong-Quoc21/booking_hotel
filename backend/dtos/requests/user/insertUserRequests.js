import Joi from 'joi';

const userSchema = Joi.object ({
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().optional().allow(""),
    role: Joi.string().required(),
    status: Joi.string().required()
})

class insertUserRequests {
    constructor(data) {
        this.full_name = data.full_name
        this.email = data.email
        this.password = data.password
        //this.MatKhau = this.encryptPassword(data.MatKhau)
        this.phone = data.phone
        this.role = data.role
        this.status = data.status
    }

    static validate(data){
        if(Array.isArray(data)){
            const schema = Joi.array().items(userSchema)
            return schema.validate(data)
        }
        return userSchema.validate(data)
    }
}

export default insertUserRequests;

