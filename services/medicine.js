import MedicineModel from "../models/medicine.js";

const MedicineServices = {
    getAll: async (limit, skip, query) => {
        try {
            const sort = {};
            if (query.sort) {
              if (typeof query.sort === "object") {
                query.sort.forEach((element) => {
                  if (element.startsWith("-")) {
                    sort[element.substring(1)] = -1;
                  } else {
                    sort[element] = 1;
                  }
                });
              } else {
                if (query.sort.startsWith("-")) {
                  sort[query.sort.substring(1)] = -1;
                } else {
                  sort[query.sort] = 1;
                }
              }
            }
            const data = await MedicineModel.find().limit(limit).skip(skip).sort(sort);

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    getOne: async (id) => {
        try {
            const data = await MedicineModel.findById(id);

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
                description: body.description,
                usage: body.usage,
                side_effect: body.side_effect,
                price: body.price,
                quantity: body.quantity,
                medicine_image: path,
            };
            const savedData = await MedicineModel.create(file);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    update: async (id, body, path) => {
        try {
            const existingBlog = await MedicineModel.findById(id);

            if (!existingBlog) {
                return { message: "error", existingBlog };
            }
            if (path) {
                path = path.replace(`\\`, `/`);
            }
            const file = {
                title: body.title || existingBlog.title,
                description: body.description || existingBlog.description,
                usage: body.usage || existingBlog.usage,
                side_effect: body.side_effect || existingBlog.side_effect,
                price: body.price || existingBlog.price,
                quantity: body.quantity || existingBlog.quantity,
                medicine_image: path || existingBlog.blog_image,
                
            };
            const savedData = await MedicineModel.findByIdAndUpdate(id, file, { new: true });
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    delete: async (id) => {
        try {
            const savedData = await MedicineModel.findByIdAndDelete(id);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
};

export default MedicineServices;
