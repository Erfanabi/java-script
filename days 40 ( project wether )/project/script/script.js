const btnCheck = document.getElementsByClassName("subtle")[0];
const btnReset = document.getElementById("btn-reset");

const inputCity = document.getElementById("city-input");

const temp = document.getElementById("temp");
const coolTemp = document.getElementById("cool");
const warmTemp = document.getElementById("warm");

const keyAPI = "af8d03e60191ac737006fe332305f5d1";


btnCheck.addEventListener("click", function () {

    let city = inputCity.value;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}`)

        .then(function (response) {

            temp.innerText = (response.data.main.temp - 273.15).toFixed(1);
            coolTemp.innerText = `${(response.data.main.temp_min - 273.15).toFixed(1)}°C`;
            warmTemp.innerText = `${(response.data.main.temp_max - 273.15).toFixed(1)}°C`;

        })
        .catch(function (error) {
            console.log("error");
        })

})

// btnCheck.addEventListener("click", function () {

//     let city = inputCity.value;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}`)

//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data.main)

//         })
//         .catch(function (error) {
//             // handle error
//             console.log("error");
//         })

// })


btnReset.addEventListener("click", Reset);


function Reset() {
    inputCity.value = "";
    temp.innerHTML = "00.0"
    coolTemp.innerText = "Cool"
    warmTemp.innerText = "Warm";
}