const exchangeFrom = document.getElementById('exchange_from_input');
const exchangeTo = document.getElementById('exchange_to_input');
const exchangeFromFlag = document.getElementById('country_from_flat');
const exchangeToFlag = document.getElementById('country_to_flag');
const exchangeBtn = document.getElementById('exchange_btn');
const country_from_symbol = document.getElementById('country_from_symbol')
const country_to_symbol = document.getElementById('country_to_symbol')

const countryFunc1 = (response) => {
    exchangeFromFlag.src = response[0].flag
    country_from_symbol.innerText = response[0].currencies[0].code

}

const countryFunc2 = (response) => {
  exchangeToFlag.src = response[0].flag
  country_to_symbol.innerText = response[0].currencies[0].code
}


exchangeFrom.addEventListener('focusout', () => {
    GenericXHR(`https://restcountries.eu/rest/v2/name/${exchangeFrom.value}`,countryFunc1)
  });

 exchangeTo.addEventListener('focusout', () => {
    GenericXHR(`https://restcountries.eu/rest/v2/name/${exchangeTo.value}`,countryFunc2)
  });

  

  
  
  