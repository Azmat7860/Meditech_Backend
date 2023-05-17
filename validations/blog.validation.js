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
            category: joi.string().required(),
            description: joi.string().required(),
            blog_image: joi.string(),
        }),
    },

    update:{
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            title: joi.string().required(),
            category: joi.string().required(),
            description: joi.string().required(),
            blog_image: joi.string(),
        }),
    },
}
