const timeZone = document.getElementsByClassName("timezone")[0];
const icon = document.getElementsByClassName("icon")[0];
const degree = document.getElementsByClassName("degree")[0];
const degreeSpan = document.getElementById("span");
const time = document.getElementById("time");
const cityDiv = document.getElementById("city");
const temperatureDescription = document.getElementsByClassName("temperature-description")[0];

const key = "af8d03e60191ac737006fe332305f5d1";

// ipApi();
// weatherApi();


function ipApi() {
    const url = "http://ip-api.com/json/?fields=country,city,lat,lon,timezone";

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);

            let country = data.country;
            let city = data.city;
            let lat = data.lat;
            let lon = data.lon;
            let timezone = data.timezone;

            // console.log(country);
            // console.log(city);
            // console.log(lat);
            // console.log(lon);
            // console.log(timezone);

            weatherApi(lat, lon, country, city, timezone);


        })
        .catch(function (err) {
            console.log(err)
        })
}

function weatherApi(lat, lon, country, city, timezone) {
    timeZone.innerHTML = timezone;
    cityDiv.innerHTML = city;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            degree.innerHTML = ((data.main.temp) - 272.15).toFixed(1);
            degreeSpan.innerHTML = "C";

            temperatureDescription.innerHTML = data.weather[0].main;


            if ((data.weather[0].main == "Clear") && (getDayOrNight() == "night")) {
                icon.innerHTML = `<img src="icons/Clear-Night.svg">`;
            }
            else if ((data.weather[0].main == "Clear") && (getDayOrNight() == "day")) {
                icon.innerHTML = `<img src="icons/Clear-Day.svg">`;
            }
            else if (data.weather[0].main == "Clouds") {
                icon.innerHTML = `<img src="icons/Clouds.svg">`;
            }
            else if (data.weather[0].main == "Drizzle") {
                icon.innerHTML = `<img src="icons/Drizzle.svg">`;
            }
            else if (data.weather[0].main == "Rain") {
                icon.innerHTML = `<img src="icons/Rain.svg">`;
            }
            else if (data.weather[0].main == "Snow") {
                icon.innerHTML = `<img src="icons/Snow.svg">`;
            }
            else if (data.weather[0].main == "Thunderstorm") {
                icon.innerHTML = `<img src="icons/Thunderstorm.svg">`;
            }

            // console.log(data.weather[0].main);
        })
        // console.log(lat);
        // console.log(lon);

        .catch(function (err) {
            console.log(err)
        })

}

function timer() {
    let MyDate = new Date();
    // console.log(MyDate.toLocaleTimeString());
    time.innerHTML = MyDate.toLocaleTimeString()
}

function getDayOrNight() {
    let now;
    let MyDate = new Date();

    if ((MyDate.getHours() >= 6) && (MyDate.getHours() <= 19)) {
        now = "day";
    } else {
        now = "night";
    }

    return now;
}


setInterval(ipApi, 5000);
setInterval(timer, 1000);

// console.log(getDayOrNight());




























// const degreeSection = document.getElementById("degree-section");

// setTimeout(dd, 10000);

// function dd() {
//     degreeSection.addEventListener("click", function () {
//         if (degreeSpan.innerHTML == "C") {
//             console.log("cele run");
//             degree.innerHTML = data.main.temp;
//             degreeSpan.innerHTML = "K";
//         }
//         // if (degreeSpan.innerHTML == "K") {
//         //     console.log("kelvin run");
//         //     degree.innerHTML = ((data.main.temp) - 272.15).toFixed(1);
//         //     degreeSpan.innerHTML = "C";
//         // }
//     })
//     console.log(degree.innerHTML);
//     console.log(degreeSpan.innerHTML);
// }