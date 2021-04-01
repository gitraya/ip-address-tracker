const main = () => {
  // initialize map data
  let map, marker, markerIcon;
  (function initMap() {
    map = L.map('mapid');
    map.addLayer(
      new L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.MAP_TOKEN,
        }
      )
    );
    markerIcon = L.icon({
      iconUrl: '../src/images/icon-location.svg',
    });
    return;
  })();

  // function to update map data
  function updateMap(lat, lng) {
    map.setView([lat, lng], 14);
    marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
    return;
  }

  // url ip geolocation API
  const ipUrl = new URL('https://geo.ipify.org/api/v1?');
  let ipParams = {
    apiKey: process.env.IPIFY,
    ipAddress: '',
    domain: '',
  };
  let ipUrlParams = new URLSearchParams({ ...ipParams });
  let ipData = new Object();

  // fetching data from API
  async function fetchData(url, params) {
    try {
      const jsonData = await fetch(url + params);
      let data = await jsonData.json();
      if (data.messages)
        return (data = {
          message:
            'Unable to find the data you requested, it may be that the domain or IP address is not available!',
        });
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  // set API data to elements
  function setDataToElement(data) {
    document.querySelector('.js-ip-address').innerText = data.ip;
    document.querySelector(
      '.js-location'
    ).innerText = `${data.location.city}, ${data.location.country} ${data.location.geonameId}`;
    document.querySelector(
      '.js-timezone'
    ).innerText = `UTC ${data.location.timezone}`;
    document.querySelector('.js-isp').innerText = data.isp;
  }

  // function to check valid domain or valid ip address
  function checkInputValue(inputValue) {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

    if (ipRegex.test(inputValue)) {
      return (ipUrlParams = new URLSearchParams({
        ...ipParams,
        ipAddress: inputValue,
      }));
    } else if (domainRegex.test(inputValue)) {
      return (ipUrlParams = new URLSearchParams({
        ...ipParams,
        domain: inputValue,
      }));
    } else {
      return alert('Please enter the correct domain format or IP address!');
    }
  }

  // form element
  const form = document.querySelector('.header__form');
  form.onsubmit = submitData;

  // function to submit form data
  async function submitData(e) {
    e.preventDefault();
    const inputValue = e.target.querySelector('.input').value;

    // check valid input
    if (!inputValue) return;
    checkInputValue(inputValue);

    ipData = await fetchData(ipUrl, ipUrlParams);

    // if the domain or ip address is not available then display a message
    if (ipData.message) return alert(ipData.message);

    // update the data to the element
    setDataToElement(ipData);
    updateMap(ipData.location.lat, ipData.location.lng);

    // reset data
    e.target.querySelector('.input').value = '';
    ipUrlParams = new URLSearchParams({
      ...ipParams,
      ipAddress: '',
      domain: '',
    });
  }

  window.onload = async function initApp() {
    ipData = await fetchData(ipUrl, ipUrlParams);

    // set data
    setDataToElement(ipData);
    updateMap(ipData.location.lat, ipData.location.lng);
  };
};

export default main;
