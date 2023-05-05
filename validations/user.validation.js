import joi from 'joi'

export default {
    id:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    register: {
        body: joi.object().keys({
            name: joi.string().required(),
            email: joi.string().required().email(),
            password: joi.string().required(),
        }),
    },
    login:{
        body: joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required(),
        }),
    },

    update:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            name: joi.string().required(),
            email: joi.string().email(),
            password: joi.string(),
        }),
    },
}
