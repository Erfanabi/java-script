const btn = document.getElementById("btn");

function getText() {
    fetch('sample.txt')
        // .then(function (res) {
        //     return res.text();
        // })
        // .then(function (data) {
        //     console.log(data);
        // })

        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
        })
}


btn.addEventListener("click", getText);