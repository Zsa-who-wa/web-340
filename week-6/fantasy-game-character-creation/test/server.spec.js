const http = require('http');

let server;

beforeAll(() => {
  server = require('../src/server');
});

afterAll(() => {
  server.close();
});

describe('Fantasy Game Character Creation API', () => {
  it('should confirm character creation on Post /confirm', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=Warrior&gender=Male&funFact=Loved dragons',
      method: 'POST',
    };
    
    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
    
    reg.end();
  });
  
  it('should confirm character creation on Post /confirm', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST',
    };
    
    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
    
    reg.end();
  });
  
  it('should retrieve character creation on GET /view', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/view',
      method: 'GET',
    };
    
    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const character = JSON.parse(data);
        expect(character).toHaveProperty('class', 'Warrior');
        expect(character).toHaveProperty('gender', 'Male');
        expect(character).toHaveProperty('funFact', 'Loves dragons');
        done();
      });
    });
    
    req.end();
  });
});