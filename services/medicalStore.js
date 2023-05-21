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

  getAll: async (query) => {
    try {
      const filter = {};
      if (query.name) {
        filter.name = query.name;
      }
      if (query.address) {
        filter.address = query.address;
      }
      if (query.certificate) {
        filter.certificate = query.certificate;
      }

      // If we send search=Harry, then we will get all the books whose name contains Harry
      if (query.search) {
        filter.$or = [
          { name: { $regex: query.search, $options: "i" } },
          { speciality: { $regex: query.search, $options: "i" } },
        ];
      }
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
      const data = await MedicalStoreModel.find(filter).sort(sort);

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
