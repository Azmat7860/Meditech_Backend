import joi from 'joi'

export default {
    id:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    add: {
        body: joi.object().keys({
            patient_name: joi.string().required(),
            phone: joi.string().required(),
            appointment_type: joi.string().valid('video', 'physical'),
            doctor_id: joi.string().required(),
        }),
    },

    update:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            patient_name: joi.string().required(),
            phone: joi.string().required(),
            appointment_type: joi.string().valid('video', 'physical'),
            doctor_id: joi.string().required(),
        }),
    },
}
