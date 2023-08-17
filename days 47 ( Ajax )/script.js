const postList = document.getElementById("post-list")

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        for (let post of data.slice(0, 10)) {

            postList.innerHTML += `
                <div class="card">
                    <div class="id">${post.id}</div>

                    <div class="title">
                        ${post.title}
                    </div>
        
                    <div class="body">
                        ${post.body}
                    </div>
                </div>
                    `
        }
    })
    .catch(function (err) {
        console.log(err);
    })


let number = 0;
let isAjax = false;

window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && !isAjax) {
        isAjax = true;
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {

                for (let post of data.slice(number * 10, (number + 1) * 10)) {

                    postList.innerHTML += `
                        <div class="card">
                            <div class="id">${post.id}</div>

                            <div class="title">
                                ${post.title}
                            </div>
        
                            <div class="body">
                                ${post.body}
                            </div>
                        </div>
                        `
                    isAjax = false;

                }
            })
            .catch(function (err) {
                console.log(err);
            })

        number++;
    }

})

// window.addEventListener("resize", function () {
//     // console.log(window.innerHeight)
//     // console.log(window.innerWidth)
//     console.log(this.document.body.offsetHeight)
//     console.log(this.document.body.offsetWidth)

// })
