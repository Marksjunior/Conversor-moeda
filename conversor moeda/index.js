const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("currency-select")

function convertValues(){
    const inputCurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
    
    
    console.log(currencySelect)
    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValues = inputCurrencyvalue / dolarToday
    

    currencyValueToConvert.innerHTML= new Intl.NumberFormat("PT-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyvalue)
    
    currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(convertedValues)

    console.log(convertedValues)
}

convertButton.addEventListener("click",convertValues)