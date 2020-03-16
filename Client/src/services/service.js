import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  try {
    const result = await instance.get('/services');
    console.log(result);
    const services = result.data.services;
    console.log(services); // /api/services/list
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
