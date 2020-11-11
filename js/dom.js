const exchangeFrom = document.getElementById('exchange_from_input');
const exchangeTo = document.getElementById('exchange_to_input');
const exchangeFromFlag = document.getElementById('country_from_flat');
const exchangeToFlag = document.getElementById('country_to_flag');
const exchangeBtn = document.getElementById('exchange_btn');
const country_from_symbol = document.getElementById('country_from_symbol')
const country_to_symbol = document.getElementById('country_to_symbol')
const inputChangeTo = document.getElementById('exchange_to_input');
const main = document.getElementById('main');

function handelErorr(error){
    const errorP = document.getElementById('error_handel');
    errorP.textContent = error;
}


inputChangeTo.addEventListener('focusout' , function(){
    GenericXHR( `https://api.unsplash.com/search/photos?client_id=0ZxAs6sAoEUe2x4F8jct34FDsXarlgmSj6q5o1QXa9I&query=${inputChangeTo.value}`, (data)=>{
        main.style.backgroundImage = ` url(${data.results[0].urls.regular})`;
    })
})

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

  

  
  
  
