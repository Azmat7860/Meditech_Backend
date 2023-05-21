import AppointmentModel from "../models/appointment.js";

const AppointmentService = {
  getOne: async (id) => {
    try {
      const savedData = await AppointmentModel.findOne(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }else{
        return { message: "error" };
      }
       
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },

  add: async (body) => {
    try {
      const savedData = await AppointmentModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getAll: async () => {
    try {
      const data = await AppointmentModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  update: async (id,body) => {
    try {
      const savedData = await AppointmentModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await AppointmentModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default AppointmentService;
