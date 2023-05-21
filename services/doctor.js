import DoctorModel from "../models/doctor.js";

const DoctorService = {
  login: async (body) => {
    try {
      const savedData = await DoctorModel.findOne({
        email: body.email,
        password: body.password,
      });
      // const token = jwt.sign({ id: data._id }, config.env.jwtSecret, {
      //   expiresIn: "1h",
      // });
      if (savedData) {
        return {
          message: "success",
          check: "Doctor",
          data: savedData,
          token: "token",
        };
      } else {
        return { message: "error" };
      }
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },

  register: async (body) => {
    try {
      const savedData = await DoctorModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getOne: async (id) => {
    try {
      const data = await DoctorModel.findById(id);

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
      // if ( query.fee) {
      //   // if we send fee[gt]=1000&fee[lt]=2000, then  query.fee will be an object
      //   if (typeof  query.fee === "object") {
      //     // if we send fee[gt]=1000, then  query.fee.$gt will be 1000
      //     if ( query.fee.gt) {
      //       filter.fee = { ...filter.fee, $gt:  query.fee.gt };
      //     }
      //     // if we send fee[lt]=2000, then  query.fee.$lt will be 2000
      //     if ( query.fee.lt) {
      //       filter.fee = { ...filter.fee, $lt:  query.fee.lt };
      //     }
      //   }
      //   // if we send fee=1000, then  query.fee will be 1000
      //   else {
      //     filter.fee =  query.fee;
      //   }
      // }
      if (query.address) {
        filter.address = query.address;
      }
      if (query.speciality) {
        filter.speciality = query.speciality;
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
      const data = await DoctorModel.find(filter).sort(sort);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  update: async (id, body) => {
    try {
      const savedData = await DoctorModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await DoctorModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default DoctorService;
