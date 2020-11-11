const exchangeFrom = document.getElementById('exchange_from_input');
const exchangeTo = document.getElementById('exchange_to_input');
const exchangeFromFlag = document.getElementById('country_from_flat');
const exchangeToFlag = document.getElementById('country_to_flat');
const exchangeBtn = document.getElementById('exchange_btn');
const country_from_symbol = document.getElementById('country_from_symbol')
const country_to_symbol = document.getElementById('country_to_symbol')

const countryFunc1 = (response) => {
  console.log(response.code);
    exchangeFromFlag.src = response.flag
    country_from_symbol.innerContent = response.code
}

const countryFunc2 = (response) => {
  exchangeToFlag.src = response.flag
  country_to_symbol.innerContent = response.code
}


  exchangeBtn.addEventListener('click', () => {
    GenericXHR(`https://restcountries.eu/rest/v2/name/${exchangeFrom.value}`,countryFunc1)
  });

  

  
  
  