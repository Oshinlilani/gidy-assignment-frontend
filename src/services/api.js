import axios from "axios";

const API = axios.create({
  baseURL: "https://gidy-assignment-backend.onrender.com"
});

export const getProfile = () => API.get("/profile");

export const updateProfile = (data) => API.put("/profile", data);

export const endorseSkill = (skillId) =>
  API.post(`/skills/${skillId}/endorse`);