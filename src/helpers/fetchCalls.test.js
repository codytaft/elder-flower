import {
  testResponsePhoneNumber,
  createUser,
  getUser,
  sendSOS
} from './fetchCalls.js';

describe('fetch call component', () => {
  let mockUser;
  let mockFetch;
  beforeEach(() => {
    mockUser = {
      firstName: 'Cody',
      lastName: 'Taft',
      phoneNumber: '+19038511575',
      email: 'cody.taft@gmail.com',
      password: '123',
      contactName: 'Gaynell',
      contactPhone: '+17203304593',
      isElder: true
    };
  });
  describe('testResponsePhoneNumber', () => {
    it('should call fetch with the correct params', async () => {
      const url = `http://localhost:3000/api/sendMessage`;
      mockFetch = [
        url,
        {
          body:
            '{"body":"If this is undefined, type \'yes\'. If not type \'no\'."}',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      ];
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockFetch)
        })
      );
      await testResponsePhoneNumber();
      expect(window.fetch).toHaveBeenCalledWith(...mockFetch);
    });
  });
  describe('createUser', () => {
    it('should call fetch with the correct params', async () => {
      const url = `http://localhost:3000/api/v1/users/`;
      mockFetch = [
        url,
        {
          body:
            '{"user":{"firstName":"Cody","lastName":"Taft","phoneNumber":"+19038511575","email":"cody.taft@gmail.com","password":"123","contactName":"Gaynell","contactPhone":"+17203304593","isElder":true}}',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      ];

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockUser)
        })
      );

      await createUser(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...mockFetch);
    });
  });
  describe('getUser', () => {
    it('should call getUser with the correct params', async () => {
      const email = 'cody.taft@gmail.com';
      const url = `http://localhost:3000/api/v1/users/${email}`;
      mockFetch = url;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(email)
        })
      );
      await getUser(email);
      expect(window.fetch).toHaveBeenCalledWith(mockFetch);
    });
  });

  describe('sendSOS', () => {
    it('should call fetch with the correct params', async () => {
      const contactName = 'cody';
      const contactPhone = '19038511575';
      const url = `http://localhost:3000/api/sendMessage`;
      const mockFetch = [
        url,
        {
          method: 'POST',
          body: JSON.stringify({
            name: contactName,
            to: contactPhone,
            body: `Help me ${contactName}. You're my only hope`
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ];
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockFetch)
        })
      );
      await sendSOS(contactPhone, contactName);
      expect(window.fetch).toHaveBeenCalledWith(...mockFetch);
    });
  });
});
