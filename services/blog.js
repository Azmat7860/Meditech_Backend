import BlogModel from "../models/blog.js";

const BlogServices = {
    getAll: async () => {
        try {
            const data = await BlogModel.find();

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    getOne: async (id) => {
        try {
            const data = await BlogModel.findById(id);

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    add: async (body, path) => {
        try {
            console.log(path)
            path = path.replace(`\\`, `/`);
            const file = {
                title: body.title,
                category: body.category,
                description: body.description,
                blog_image: path,
            };
            const savedData = await BlogModel.create(file);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    update: async (id, body, path) => {
        try {
            const existingBlog = await BlogModel.findById(id);

            if (!existingBlog) {
                return { message: "error", existingBlog };
            }
            if (path) {
                path = path.replace(`\\`, `/`);
            }
            const file = {
                title: body.title || existingBlog.title,
                category: body.category || existingBlog.category,
                description: body.description || existingBlog.description,
                blog_image: path || existingBlog.blog_image,
                
            };
            const savedData = await BlogModel.findByIdAndUpdate(id, file, { new: true });
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    delete: async (id) => {
        try {
            const savedData = await BlogModel.findByIdAndDelete(id);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
};

export default BlogServices;
