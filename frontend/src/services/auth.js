import { api } from "./api";

export const authService = {
  login: (email, password) => api.post("/auth/login", { email, password }),

  signup: (name, email, password) =>
    api.post("/auth/signup", { name, email, password }),

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getProfile: () => api.get("/auth/profile"),
};
