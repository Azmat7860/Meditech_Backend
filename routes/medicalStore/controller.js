import MedicalStoreService from "../../services/medicalStore.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {

  register: async (req, res) => {
    const addResponse = await MedicalStoreService.register(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  login: async (req, res) => {
    try{
      const addResponse = await MedicalStoreService.login(req.body);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse);
      } else {
        return httpResponse.UNAUTHORIZED(res, addResponse.data);
      }
    }
    catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
      }
  },
  getOne: async (req, res) => {
    try {
      const data = await MedicalStoreService.getOne(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await MedicalStoreService.getAll(req.query);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try{
    const addResponse = await MedicalStoreService.update(req.params.id, req.body, {new: true} );
    return httpResponse.SUCCESS(res, addResponse.data);
} catch (error) {
    return httpResponse.NOT_FOUND(res, error);
  }
  },
  delete: async (req, res) => {
    try {
        const addResponse = await MedicalStoreService.delete(req.params.id);   
        return httpResponse.SUCCESS(res, addResponse.data);  
    } catch (error) {
        return httpResponse.NOT_FOUND(res, error);
    }
  },
}

export default controller;
