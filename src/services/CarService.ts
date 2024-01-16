import axios, { AxiosResponse } from 'axios';
import { CarModel } from '../models/responses/CarModel';

class CarService {

  
  async getAll(): Promise<AxiosResponse<CarModel[]>> {
    try {
      const response = await axios.get<CarModel[]>('http://localhost:8080/api/cars/getAll');
      return response;
    } catch (error) {
      
      console.error('Error fetching data:', error);
      throw error; 
    }
  }
}

export default CarService;
