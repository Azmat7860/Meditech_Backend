import AppointmentService from "../../services/appointment.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    const addResponse = await AppointmentService.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },
  getAll: async (req, res) => {
    try {
      const addResponse = await AppointmentService.getAll();
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const addResponse = await AppointmentService.getOne(req.params.id);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.NOT_FOUND(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
 
  update: async (req, res) => {
    try {
      const addResponse = await AppointmentService.update(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const addResponse = await AppointmentService.delete(req.params.id);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
};

export default controller;
