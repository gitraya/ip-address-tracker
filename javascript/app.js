const ipUrl = new URL('https://geo.ipify.org/api/v1?');
let ipParams = {
  apiKey: config.IPIFY,
  ipAddress: '',
  domain: '',
};
let ipUrlParams = new URLSearchParams({ ...ipParams });
let ipData = new Object();

const form = document.querySelector('.header__form');
form.onsubmit = submitData;

async function fetchData(url, params) {
  let fetchData;
  await fetch(url + params)
    .then((res) => res.json())
    .then((data) => {
      fetchData = data;
      console.log(fetchData);
    })
    .catch((err) => console.log(err));
  return fetchData;
}

function setDataToElement(data) {
  if (data) {
    document.querySelector('.js-ip-address').innerText = data.ip;
    document.querySelector(
      '.js-location'
    ).innerText = `${data.location.city}, ${data.location.country} ${data.location.geonameId}`;
    document.querySelector(
      '.js-timezone'
    ).innerText = `UTC ${data.location.timezone}`;
    document.querySelector('.js-isp').innerText = data.isp;
  }
  return;
}

async function submitData(e) {
  e.preventDefault();
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

  const inputValue = e.target.querySelector('.input').value;

  if (!inputValue) return;
  if (ipRegex.test(inputValue))
    ipUrlParams = new URLSearchParams({ ...ipParams, ipAddress: inputValue });
  else if (domainRegex.test(inputValue))
    ipUrlParams = new URLSearchParams({ ...ipParams, domain: inputValue });
  else return;

  ipData = await fetchData(ipUrl, ipUrlParams);
  setDataToElement(ipData);

  e.target.querySelector('.input').value = '';
  ipUrlParams = new URLSearchParams({ ...ipParams, ipAddress: '', domain: '' });
}

window.onload = async function initApp() {
  ipData = await fetchData(ipUrl, ipUrlParams);
  setDataToElement(ipData);
};
