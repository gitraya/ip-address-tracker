import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const dotenv = require('dotenv/types');
dotenv.config();

console.log(process.env);

async function req() {
  const res = await fetch(
    'https://geo.ipify.org/api/v1?apiKey=at_sWBcpuEmjOoiahw0jdn9pmebP4Zz7'
  );
  res
    .json()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
