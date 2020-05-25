import { AxiosResponse } from 'axios';
import api from './api';

export const getForecastForCityAndDate = (
  city: string,
  date: number,
): Promise<AxiosResponse> =>
  api.get(
    `weather?q=${city}&cnt=1&dt=${date}&appid=886268d885e2614466725dcf8b9589c5`,
  );

export default { getForecastForCityAndDate };
