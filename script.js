
const convertButton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select-convert-from")
const currencySelect2 = document.querySelector(".currency-select-convert-to")

const inputCurrency = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyName1 = document.querySelector(".currency-name1")
const currencyImg1 = document.querySelector(".currency-img-to-convert")


function convertValue() {

    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value")


    const dolarToday = 4.89
    const euroToday = 5.24
    const libraToday = 6.03
    const bitcoinToday = 170.56208


    if (currencySelect2.value == "real ") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL"

        }).format(0.00)
    }
    if (currencySelect2.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(0.00)
    }

    if (currencySelect2.value == "euro ") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EURO"

        }).format(0.00)
    }

    if (currencySelect2.value == "libra ") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(0.00)
    }
    if (currencySelect2.value == "bitcoin ") {
        currencyValue.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"

        }).format(0.00)
    }

    if (currencySelect1.value == "real" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }


    if (currencySelect1.value == "real" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

    if (currencySelect1.value == "real" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)

        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)
    }
    if (currencySelect1.value == "real" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)

        currencyValue.innerHTML = inputCurrency / bitcoinToday
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)

        const realToday = 0.2046806

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / realToday)
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)

        const euroToday = 1.0708313

        currencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)

        const libraToday = 1.233556

        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)

        const bitcoinToday = 34.911203

        currencyValue.innerHTML = inputCurrency / bitcoinToday
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

        const realToday = 0.19113542

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / realToday)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

        const dolarToday = 0.93375456

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

        const libraToday = 1.1518274

        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

        const bitcoinToday = 32.594028

        currencyValue.innerHTML = inputCurrency / bitcoinToday
    }
    if (currencySelect1.value == "lirba " && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)

        const realToday = 0.16595869

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / realToday)
    }
    if (currencySelect1.value == "libra" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)

        const dolarToday = 0.81074699

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (currencySelect1.value == "libra" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)

        const euroToday = 0.86827689

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)

    }
    if (currencySelect1.value == "libra" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)

        const bitcoinToday = 28.17282

        currencyValue.innerHTML = inputCurrency / bitcoinToday
    }

    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)

        const realToday = 0.000005864045657

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency / realToday)
    }
    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)

        const dolarToday = 0.000028648

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)

        const euroToday = 0.000030673854362

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)

        const libraToday = 0.000035394917396

        currencyValue.innerHTML = new Intl.NumberFormat("en-UB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)

    }

}


currencySelect1.addEventListener("change", function () {
    if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "Real Brasileiro"
        currencyImg1.src = "./assets/real.png"

    }

    if (currencySelect1.value == "dolar") {
        currencyName1.innerHTML = "Dólar Americano"
        currencyImg1.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)

    }

    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

    }

    if (currencySelect1.value == "libra") {
        currencyName1.innerHTML = "Libra Esterlina"
        currencyImg1.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
    }

    if (currencySelect1.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)

    }
    convertValue()
})



currencySelect2.addEventListener("change", function () {

    const currencyName2 = document.querySelector(".currency-name2")
    const currencyImg2 = document.querySelector(".currency-img-converted")

    if (currencySelect2.value == "real") {
        currencyName2.innerHTML = "Real Brasileiro"
        currencyImg2.src = './assets/real.png'
    }
    if (currencySelect2.value == "dolar") {
        currencyName2.innerHTML = "Dólar Americano"
        currencyImg2.src = "./assets/dolar.png"
    }
    if (currencySelect2.value == "euro") {
        currencyName2.innerHTML = " Euro"
        currencyImg2.src = "./assets/euro.png"
    }
    if (currencySelect2.value == "libra") {
        currencyName2.innerHTML = "Libra Esterlina"
        currencyImg2.src = "./assets/libra.png"
    }
    if (currencySelect2.value == "bitcoin") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin.png"
    }

    convertValue()

})




convertButton.addEventListener("click", convertValue)
convertButton.addEventListener("click", function () {
    if (currencySelect1.value == "" || currencySelect2.value == "" ||
        currencySelect1.value == currencySelect2.value) {
        alert("Uma ou mais escolhas  faltando!!! Preeencher ambas  as opções com moeda diferentes!!!")
    }
})