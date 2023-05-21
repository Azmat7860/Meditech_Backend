import CaretakerService from "../../services/caretaker.js";
import DoctorService from "../../services/doctor.js";
import LabService from "../../services/lab.js";
import MedicalStoreService from "../../services/medicalStore.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  register: async (req, res) => {
    const addResponse = await CaretakerService.register(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  login: async (req, res) => {
    try {
      const addResponse = await CaretakerService.login(req.body);
      const addResponse2 = await DoctorService.login(req.body);
      const addResponse3 = await LabService.login(req.body);
      const addResponse4 = await MedicalStoreService.login(req.body);

      if (
        addResponse.message === "success"
      ) {
        return httpResponse.SUCCESS(res, addResponse);
      } else if (
        addResponse2.message === "success"
      ) {
        return httpResponse.SUCCESS(res, addResponse2);
      } else if (
        addResponse3.message === "success" 
      ) {
        return httpResponse.SUCCESS(res, addResponse3);
      } else if (addResponse4.message === "success") {
        return httpResponse.SUCCESS(res, addResponse4);
      } else {
        return httpResponse.UNAUTHORIZED(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const data = await CaretakerService.getOne(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await CaretakerService.getAll(req.query);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const addResponse = await CaretakerService.update(
        req.params.id,
        req.body,
        { new: true }
      );
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const addResponse = await CaretakerService.delete(req.params.id);
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
};

export default controller;
