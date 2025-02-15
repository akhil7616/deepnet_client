import axios from "axios";
export const API_URL = "https://deepnet-menus.onrender.com/api";

export const getMenus = () => axios.get(`${API_URL}/menus`);
export const createMenu = (data) => axios.post(`${API_URL}/menus`, data);
export const createMenuItem = (menuId, data) => axios.post(`${API_URL}/menus/${menuId}/items`, data);
