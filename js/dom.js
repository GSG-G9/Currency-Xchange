// let fromCurrency= "USD";
// let toCurrency= "TRY";

const firstCurrencyName = document.querySelector(".view_first_view_currency");
const secondCurrencyName = document.querySelector(".view_second_view_currency");
const secondCurrencyRate = document.querySelector(".view_second_rate_currency");
const inputNumber = document.querySelector(".money_exchange_input");
const exchangeButton = document.querySelector("#exchange_btn");
const result = document.querySelector(".Result_convert");

const exchangeFrom = document.getElementById("exchange_from_input");
const exchangeTo = document.getElementById("exchange_to_input");

const exchangeFromFlag = document.getElementById("country_from_flag");
const exchangeToFlag = document.getElementById("country_to_flag");
const country_from_symbol = document.getElementById("country_from_symbol");
const country_to_symbol = document.getElementById("country_to_symbol");
let firstCountry = "USD";
let secondCountry = "ILS";

const countryFunc1 = (response) => {
  exchangeFromFlag.src = response[0].flag;
  country_from_symbol.innerText = response[0].currencies[0].code;
  firstCountry = response[0].currencies[0].code;
};

const countryFunc2 = (response) => {
  exchangeToFlag.src = response[0].flag;
  country_to_symbol.innerText = response[0].currencies[0].code;
  secondCountry = response[0].currencies[0].code;
};

exchangeFrom.addEventListener("focusout", () => {
  GenericXHR(
    `https://restcountries.eu/rest/v2/name/${exchangeFrom.value}`,
    countryFunc1
  );
});

exchangeTo.addEventListener("focusout", () => {
  GenericXHR(
    `https://restcountries.eu/rest/v2/name/${exchangeTo.value}`,
    countryFunc2
  );
  GenericXHR("https://api.frankfurter.app/currencies", displayCurrencyName);
  GenericXHR(
    getCurrencyConversion(
      1,
      country_from_symbol.innerText,
      country_to_symbol.innerText
    ),
    displayCurrencyRate
  );
});

exchangeButton.addEventListener("click", function () {
  GenericXHR(
    getCurrencyConversion(inputNumber.value, firstCountry, secondCountry),
    displayConversionResult
  );
});

function displayCurrencyName(res) {
  firstCurrencyName.textContent = `1 ${res[country_from_symbol.innerText]}`;
  secondCurrencyName.textContent = res[country_to_symbol.innerText];
  console.log(res);
  console.log(res[country_from_symbol.innerText]);
}

function displayCurrencyRate(res) {
  secondCurrencyRate.textContent = res.rates[country_to_symbol.innerText];
  console.log(res.rates[country_to_symbol.innerText]);
}

function displayConversionResult(res) {
  console.log(res);
  result.textContent = res.rates[country_to_symbol.innerText];
  console.log(res.rates[country_to_symbol.innerText]);
}

function getCurrencyConversion(
  numberToBeConverted,
  firstCountry,
  secondCountry
) {
  return `https://api.frankfurter.app/latest?amount=${numberToBeConverted}&from=${firstCountry}&to=${secondCountry}`;
}