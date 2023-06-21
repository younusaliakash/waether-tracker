const cityName = document.getElementById('city_name')
const date = document.getElementById('date')
const conditionImg = document.getElementById('condition-img')
const temp = document.getElementById('temp')
const conditionText = document.getElementById('condition-text')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const main = document.getElementById('main')


const submit = document.getElementById('submit')
submit.addEventListener('click', function () {

    const inputBtn = document.getElementById('inputCity').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=d5ba0b5a3e2f488eb28152206232106&q=${inputBtn}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if (data !== null) {
                main.classList.add('active')
            }
            cityName.innerHTML = data.location.name
            conditionImg.innerHTML = `<img src=${data.current.condition.icon} alt/>`
            date.innerHTML = `${new Date(data.location.localtime).toLocaleDateString()}`
            temp.innerHTML = `${data.current.temp_c} °C`
            conditionText.innerHTML = data.current.condition.text

            wind.innerText = `${data.current.wind_kph} km/h`

            humidity.innerText = `${data.current.humidity} %`

        })
        .catch(res => {
            main.classList.remove('active')
            alert("Please Enter Right City Name")
        })
})