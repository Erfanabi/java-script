function getText() {
    const input1 = document.getElementById("input-1").value;
    const input2 = document.getElementById("input-2").value;

    const btn = document.getElementById("btn");


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            Accept: "/*/",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: input1, body: input2 })
    })

        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })

    // console.log(input1);
    // console.log(input2);

}


btn.addEventListener("click", getText);