import axios from 'axios';
const baseURL = 'http://localhost:3002/cars';
export function getCars(brand = '') {
  let carsData = axios
    .get(`${baseURL}?brand=${brand}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    type: 'CARS_LIST',
    payload: carsData,
  };
}

export function getCarDetails(id = 0) {
  let carDetails = axios
    .get(`${baseURL}/${id}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: 'CAR_DETAILS',
    payload: carDetails,
  };
}

export function clearDetails(id = 0) {
  return {
    type: 'CLEAR_DETAILS',
    payload: {},
  };
}
