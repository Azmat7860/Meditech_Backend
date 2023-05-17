import joi from 'joi'

export default {
    id:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    add: {
        body: joi.object().keys({
            description: joi.string(),
            appointment_type: joi.string().valid('video', 'physical').required(),
            user_id: joi.string().required(),
            doctor_id: joi.string().required(),
        }),
    },

    update:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            description: joi.string(),
            appointment_type: joi.string().valid('video', 'physical').required(),
            user_id: joi.string().required(),
            doctor_id: joi.string().required(),
        }),
    },
}
