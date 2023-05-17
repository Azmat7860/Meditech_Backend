import MedicalStoreModel from "../models/medicalStore.js";

const MedicalStoreService = {
  login: async (body) => {
    try {
      const savedData = await MedicalStoreModel.findOne({
        email: body.email,
        password: body.password,
      });
      // const token = jwt.sign({ id: data._id }, config.env.jwtSecret, {
      //   expiresIn: "1h",
      // });
      if (savedData) {
        return { message: "success", check:"MedicalStore", data: savedData, token: "token" };
      }else{
        return { message: "error" };
      }
        
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },

  register: async (body) => {
    try {
      const savedData = await MedicalStoreModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getOne: async (id) => {
    try {
        const data = await MedicalStoreModel.findById(id);

        return { message: "success", data };
    } catch (error) {
        return { message: "error", data: error.message };
    }
},

  getAll: async () => {
    try {
      const data = await MedicalStoreModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  update: async (id,body) => {
    try {
      const savedData = await MedicalStoreModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await MedicalStoreModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default MedicalStoreService;
