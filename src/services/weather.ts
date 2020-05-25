import { AxiosResponse } from 'axios';
import api from './api';

export const getForecastForCityAndDate = (
  city: string,
  date: number,
): Promise<AxiosResponse> =>
  api.get(
    `weather?q=${city}&cnt=1&dt=${date}&appid=efa34da9941e58576464d6fa76c0e999`,
  );

export default { getForecastForCityAndDate };
