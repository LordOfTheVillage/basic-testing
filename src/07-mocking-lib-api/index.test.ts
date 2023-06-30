// Uncomment the code below and write your tests
import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  test('should create instance with provided base url', async () => {
    const axiosClient = {
      get: jest.fn().mockResolvedValue({ data: '' }),
    };

    jest
      .spyOn(axios, 'create')
      .mockReturnValue(axiosClient as unknown as AxiosInstance);

    const relativePath = '/posts';
    await throttledGetDataFromApi(relativePath);

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const axiosClient = {
      get: jest.fn().mockResolvedValue({ data: '' }),
    };

    jest
      .spyOn(axios, 'create')
      .mockReturnValue(axiosClient as unknown as AxiosInstance);

    const relativePath = '/users';
    await throttledGetDataFromApi(relativePath);

    expect(axiosClient.get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const responseData = { id: 1, title: 'Test Post' };
    const axiosClient = {
      get: jest.fn().mockResolvedValue({ data: responseData }),
    };

    jest
      .spyOn(axios, 'create')
      .mockReturnValue(axiosClient as unknown as AxiosInstance);

    const result = await throttledGetDataFromApi('/posts');

    expect(result).toEqual(responseData);
  });
});
