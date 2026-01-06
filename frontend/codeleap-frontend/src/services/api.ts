import axios from "axios";

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export const getPosts = () => api.get('/carrers/');

export const createPost = (data: { 
    username: string; 
    title: string; 
    content: string; 
  }) => api.post('/carrers/', data);


export const updatePost = (id: number, data: { 
    title: string; 
    content: string 
  }) => api.patch(`/careers/${id}/`, data);

export const deletePost = (id: number) => api.delete(`/careers/${id}/`);

export default api;