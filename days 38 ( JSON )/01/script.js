// const user = {
//     firstName: "erfan",
//     lastName: "sharafi",
//     fullName: function () {
//         return `my name is ${this.firstName} my family is ${this.lastName}`;
//     }
// }


// console.log(user.fullName());

// ----------#----------

// const user = `{
//     "firstName": "erfan",
//     "lastName": "sharafi",
//     "age": 25
// }`;


// const result = JSON.parse(user)

// console.log(result);

// ----------#----------

// const user = {
//     firstName: "erfan",
//     lastName: "sharafi",
//     age: 25
// };

// const test = JSON.stringify(user);

// const result = JSON.parse(test);

// console.log(result);

// ----------#----------

const users = document.getElementsByClassName("users")[0];

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        // handle success

        // for (let i = 0; i <= response.data.length; i++){
        //     let liUser = document.createElement("li");
        //     liUser.innerText = response.data[i].username;
        //     users.appendChild(liUser);
        // }

        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });