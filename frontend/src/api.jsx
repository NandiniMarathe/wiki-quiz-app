// frontend/src/api.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // your FastAPI server

export const generateQuiz = async (url) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { url });
    return response.data;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
};
