import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  try {
    const result = await instance.get('/service/list');
    const services = result.data.services;
    return services;
  } catch (error) {
    throw error;
  }
};

const load = async id => {
  const result = await instance.get(`/service/${id}`);
  const service = result.data.service;
  return service;
};

export { list, load };
