const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config()

const data = `
export const environment = {
  environment: '${process.env.NODE_ENV}',
  production: '${process.env.NODE_ENV === 'production'}',
  apiKey: '${process.env.API_KEY}',
  apiUrl: '${process.env.API_URL}'
};
`;

fs.writeFile('src/environments/environment.ts', data, (err) => {
  if (err) throw err;
  console.log('Environment variables have been generated!');
});
