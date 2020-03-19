import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  try {
    const result = await instance.get('/subscription/list');
    console.log(result);
    const subscriptions = result.data.subscriptions;
    return subscriptions;
  } catch (error) {
    throw error;
  }
};

const select = async id => {
  const result = await instance.post(`/subscription/${id}/select`);
  const subscription = result.data.subscription;
  return subscription;
};

const load = async id => {
  const result = await instance.get(`/${id}`);
  const subscription = result.data.subscription;
  return subscription;
};

export { list, load, select };
