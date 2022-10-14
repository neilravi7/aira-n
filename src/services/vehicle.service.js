// import React from 'react';
import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:8000';

class VehicleService {
  getCarlist() {
    return axios.get(API_URL + '/vehicle/list/');
  }

  getCarDetail(carId) {
    return axios.get(API_URL + `/vehicle/${carId}/detail/`, { headers: authHeader() });
  }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new VehicleService();