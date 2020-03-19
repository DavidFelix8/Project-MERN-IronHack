import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
});

const list = async () => {
  const result = await instance.get(`/booking/list`);
  const bookings = result.data.bookings;
  return bookings;
};

const create = async (serviceId, date) => {
  const result = await instance.post(`/service/${serviceId}/book`, { date });
  const booking = result.data.booking;
  return booking;
};

export { create };
