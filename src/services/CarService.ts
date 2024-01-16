import axios, { AxiosResponse } from 'axios';
import { CarModel } from '../models/responses/CarModel';

class CarService {

  // Java servisine get request yapacak olan metot
  async getAll(): Promise<AxiosResponse<CarModel[]>> {
    try {
      const response = await axios.get<CarModel[]>('http://localhost:8080/api/cars/getAll');
      return response;
    } catch (error) {
      // Hata durumunda burada işlem yapabilirsiniz.
      console.error('Error fetching data:', error);
      throw error; // İsterseniz hatayı yukarıya iletebilirsiniz.
    }
  }
}

export default CarService;
