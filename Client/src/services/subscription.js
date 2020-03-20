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
  console.log('at the select service', id);
  const result = await instance.post(`/subscription/${id}/select`);
  console.log('retrived from service', result.data);
  return result.data;
};

const find = async id => {
  console.log('at the select service', id);
  const result = await instance.get(`/subscription/find/${id}`);
  console.log('retrived from service', result.data);
  return result.data;
};

const load = async id => {
  const result = await instance.get(`/${id}`);
  const subscription = result.data.subscription;
  return subscription;
};

export { list, load, select, find };
