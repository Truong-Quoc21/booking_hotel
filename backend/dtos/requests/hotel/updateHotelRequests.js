import Joi from 'joi'

const updateHotelSchema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    address: Joi.string().optional(),
    city: Joi.string().optional(),
    country: Joi.string().optional(),
    star_rating: Joi.number().integer().min(1).max(5).optional(),
    phone: Joi.string().optional(),
    email: Joi.string().email().optional(),
    thumbnail: Joi.string().allow("").optional(),
    check_in_time: Joi.string().optional(),
    check_out_time: Joi.string().optional(),
    created_at: Joi.date().optional(),
    updated_at: Joi.date().optional()
})

class updateHotelRequests {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.address = data.address
        this.city = data.city
        this.country = data.country
        this.star_rating = data.star_rating
        this.phone = data.phone
        this.email = data.email
        this.thumbnail = data.thumbnail
        this.check_in_time = data.check_in_time
        this.check_out_time = data.check_out_time
    }

    static validate(data) {
        return updateHotelSchema.validate(data, { allowUnknown: true })
    }
}

export default updateHotelRequests