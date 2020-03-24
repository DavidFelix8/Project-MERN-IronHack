import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  const result = await instance.get(`/booking/list`);
  const bookings = result.data.bookings;
  return bookings;
};

const find = async id => {
  // console.log('at the select service', id);
  const result = await instance.get(`/booking/find/${id}`);
  // console.log('retrived from service', result.data);
  return result.data;
};

const create = async (serviceId, date) => {
  const result = await instance.post(`/service/${serviceId}/book`, { date });
  const booking = result.data.booking;
  return booking;
};

const load = async id => {
  const result = await instance.get(`/${id}`);
  const booking = result.data.booking;
  return booking;
};

export { list, load, find, create };
