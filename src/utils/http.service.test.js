import axios from 'axios';
import HttpService from './http.service';

const testUrl = 'https://jsonplaceholder.typicode.com/users';
const testConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
const newObject = {
  id: 100,
  name: 'LLL',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
};
const testId = 3;
const updatedObject = {
  id: 1,
  name: 'LLL',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
};


describe('get', () => {
  test('should answer on GET', async () => {
    const spy = jest.spyOn(axios, 'get');
    await HttpService.get(testUrl, testConfig);
    expect(spy).toHaveBeenCalled();
  });
});
describe('post', () => {
  test('should answer on POST', async () => {
    const spy = jest.spyOn(HttpService, 'post');
    await HttpService.post(testUrl, newObject, testConfig);
    expect(spy).toHaveBeenCalled();
  });
});
describe('delete', () => {
  test('should answer on DELETE', async () => {
    const spy = jest.spyOn(HttpService, 'delete');
    await HttpService.delete(`${testUrl}/${testId}`, testConfig);
    expect(spy).toHaveBeenCalled();
  });
});
describe('patch', () => {
  test('should answer on PATCH', async () => {
    const spy = jest.spyOn(HttpService, 'patch');
    await HttpService.patch(`${testUrl}/${testId}`, updatedObject);
    expect(spy).toHaveBeenCalled();
  });
});
describe('create', () => {
  test('should answer on CREATE', async () => {
    const spy = jest.spyOn(HttpService, 'create');
    await HttpService.create(testConfig);
    expect(spy).toHaveBeenCalled();
  });
});
