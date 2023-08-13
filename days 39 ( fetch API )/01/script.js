const btn = document.getElementById("btn");
const ulItem = document.getElementsByClassName("ulItem").item(0);

function getText() {
    fetch('sample.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            // for (let i = 0; i < data.length; i++) {
            //     let liItem = document.createElement("li");
            //     liItem.innerHTML =
            //         `
            //     id is = ${data[i].id}
            //     name is = ${data[i].name}
            //     family is = ${data[i].familly}
                
            //     `
            //     ulItem.appendChild(liItem);
            // }

        })
}


btn.addEventListener("click", getText);