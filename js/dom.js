let fromCurrency= "USD";
let toCurrency= "TRY";

const firstCurrencyName= document.querySelector(".view_first_view_currency");
const secondCurrencyName= document.querySelector(".view_second_view_currency");
const secondCurrencyRate= document.querySelector(".view_second_rate_currency");
const inputNumber= document.querySelector(".money_exchange_input");
const exchangeButton = document.querySelector("#exchange_btn");
const result= document.querySelector(".Result_convert");
const firstCountry= document.querySelector("#exchange_from_input");


exchangeButton.addEventListener("click", function (){
  
     GenericXHR (getCurrencyConversion( inputNumber.value, fromCurrency, toCurrency) , displayConversionResult)
    

});

firstCountry.addEventListener("focusout", function(){
    GenericXHR (getCurrencyConversion(1, fromCurrency, toCurrency), displayCurrencyRate);
    GenericXHR ("https://api.frankfurter.app/currencies", displayCurrencyName)
})


function displayCurrencyName(res){
  firstCurrencyName.textContent = `1 ${res[fromCurrency]}`
  secondCurrencyName.textContent =res[toCurrency]
  console.log(res);
    console.log(res[toCurrency]);
}


function displayCurrencyRate(res){
  secondCurrencyRate.textContent = res.rates[toCurrency];
  console.log(res)
}

function displayConversionResult(res){
  console.log(res);
  result.textContent= res.rates[toCurrency]

}




function GenericXHR (url , responseCallback){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4){
          if(xhr.status === 200){
              const respnose = JSON.parse(xhr.responseText);
              responseCallback(respnose);
          }else if(xhr.status === 404){
              handelErorr(`not found,${xhr.status},${xhr.responseText1}`);
          }else{
              handelErorr(`internal error,${xhr.status},${xhr.responseText}`);
          }
      }
  }
  xhr.open("GET" , url);
  xhr.send();
}

function handelErorr(data){
  const errorP = document.getElementById('error_handel');
  errorP.textContent = data;
}


  
  function getCurrencyConversion(numberToBeConverted, fromCurrency, toCurrency){
      return `https://api.frankfurter.app/latest?amount=${numberToBeConverted}&from=${fromCurrency}&to=${toCurrency}`
  }






// GenericXHR ("https://api.frankfurter.app/currencies", displayCurrencyName)

  