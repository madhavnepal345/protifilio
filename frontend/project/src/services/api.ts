import axios from 'axios';
import { Profile, Project, Skill, Experience, BlogPost } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Profile endpoints
export const profileAPI = {
  getProfile: async (): Promise<Profile> => {
    const response = await api.get('/profile/');
    return response.data;
  },
  updateProfile: async (data: Partial<Profile>): Promise<Profile> => {
    const response = await api.patch('/profile/', data);
    return response.data;
  }
};

// Projects endpoints
export const projectsAPI = {
  getProjects: async (): Promise<Project[]> => {
    const response = await api.get('/projects/');
    return response.data;
  },
  getProject: async (id: number): Promise<Project> => {
    const response = await api.get(`/projects/${id}/`);
    return response.data;
  }
};

// Skills endpoints
export const skillsAPI = {
  getSkills: async (): Promise<Skill[]> => {
    const response = await api.get('/skills/');
    return response.data;
  }
};

// Experience endpoints
export const experienceAPI = {
  getExperiences: async (): Promise<Experience[]> => {
    const response = await api.get('/experiences/');
    return response.data;
  }
};

// Blog endpoints
export const blogAPI = {
  getPosts: async (): Promise<BlogPost[]> => {
    const response = await api.get('/blog/posts/');
    return response.data;
  },
  getPost: async (id: number): Promise<BlogPost> => {
    const response = await api.get(`/blog/posts/${id}/`);
    return response.data;
  }
};

// Contact form endpoint
export const contactAPI = {
  submitContact: async (data: any): Promise<any> => {
    const response = await api.post('/contact/', data);
    return response.data;
  }
};

export default api;