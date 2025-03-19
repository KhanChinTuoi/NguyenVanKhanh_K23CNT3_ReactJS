import axios from 'axios';

const API_URL = 'https://67da6eb435c87309f52c7012.mockapi.io/k23cnt3_nguyenvankhanh/nvk_users';

export const getUsers = () => axios.get(API_URL);
export const getUser = (NvkId) => axios.get(`${API_URL}/${NvkId}`);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (NvkId, user) => axios.put(`${API_URL}/${NvkId}`, user);
export const deleteUser = (NvkId) => axios.delete(`${API_URL}/${NvkId}`);