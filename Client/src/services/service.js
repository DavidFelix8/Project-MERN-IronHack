import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  try {
    const result = await instance.get('/services/list');
    const services = result.data.services;
    return services;
  } catch (error) {
    throw error;
  }
};

const load = async id => {
  const result = await instance.get(`${id}`);
  const subscription = result.data.subscription;
  return subscription;
};

export { list, load };
