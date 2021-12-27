import { IProduct } from './../types';
import requests from './httpService';


class MealService {
    getAllMeal(): Promise<IProduct []> {
        return requests.get('/categories.php');
    }

    getRandomMeal(): Promise<IProduct []> {
        return requests.get('/random.php');
    }
}  
export default new MealService