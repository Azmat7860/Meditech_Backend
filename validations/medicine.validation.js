import joi from 'joi'

export default {
    id:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    add: {
        body: joi.object().keys({
            title: joi.string().required(),
            description: joi.string().required(),
            usage: joi.string().required(),
            side_effect: joi.string().required(),
            price: joi.string().required(),
            quantity: joi.string().required(),
            medicine_image: joi.string(),
        }),
    },

    update:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            title: joi.string().required(),
            description: joi.string().required(),
            usage: joi.string().required(),
            side_effect: joi.string().required(),
            price: joi.string().required(),
            quantity: joi.string().required(),
            medicine_image: joi.string(),
        }),
    },
}
