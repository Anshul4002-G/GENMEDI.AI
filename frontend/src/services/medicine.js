import { api } from "./api";

export const medicineService = {
  getAll: () => api.get("/medicines"),

  getById: (id) => api.get(`/medicines/${id}`),

  search: (query) => api.get(`/medicines/search?q=${query}`),

  getAlternatives: (medicineId) =>
    api.get(`/medicines/${medicineId}/alternatives`),

  getSimilarity: (medicineId, alternativeId) =>
    api.get(`/medicines/${medicineId}/similarity/${alternativeId}`),
};
