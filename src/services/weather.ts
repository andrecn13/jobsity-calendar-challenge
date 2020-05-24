import { AxiosResponse } from 'axios';
import api from './api';

const API_ID = '087a6e3f2d3bf106f5cfa83413f3f552';

export const getForecastForCityAndDate = (
  city: string,
  date: number,
): Promise<AxiosResponse> =>
  api.get(`weather?q=${city}&cnt=1&dt=${date}&appid=${API_ID}`);

export default { getForecastForCityAndDate };
