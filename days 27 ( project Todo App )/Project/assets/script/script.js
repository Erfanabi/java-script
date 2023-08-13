const titleInput = document.getElementsByClassName("form-control")[0];
const descriptionInput = document.getElementsByClassName("form-control")[1];

const addBtn = document.getElementsByClassName("btn btn-primary")[0];
const editBtn = document.getElementsByClassName("btn btn-success")[0];

const rowNotComTask = document.getElementById("row-not-com");
const rowComTask = document.getElementById("row-com");

let checkIcon = document.querySelectorAll(".icon-check");
let checkDelete = document.querySelectorAll(".icon-trash");
let checkEdit = document.querySelectorAll(".icon-edit");

const toDoApp = document.querySelector(".todo-app");


// console.log(rowNotComTask.innerHTML);
// let title;
// let description;

addBtn.addEventListener("click", function () {
    let title = titleInput.value;
    let description = descriptionInput.value;

    let cardNotComTask = `
    <div class="col-12 col-md-6 mb-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title text-muted">${title}</h5>
                <p class="card-text">${description}</p>

                <div class="d-flex">
                    <div class="icon-check">
                        <i class="bi bi-check-square-fill text-success"></i>
                    </div>
                            
                    <div class="icon-trash">
                        <i class="bi bi-trash text-danger mx-3"></i>
                    </div>
                            
                    <div class="icon-edit">
                        <i class="bi bi-pencil-square text-primary"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    rowNotComTask.innerHTML += cardNotComTask;

    titleInput.value = "";
    descriptionInput.value = "";

    checkIcon = document.querySelectorAll(".icon-check");
    checkDelete = document.querySelectorAll(".icon-trash");
    checkEdit = document.querySelectorAll(".icon-edit");
    // console.log(checkIcon);

    clickCheck();
    clickDelete();
    clickEdit();
})





function clickCheck() {
    for (let check of checkIcon) {
        check.addEventListener("click", function () {
            for (let elm of rowComTask.getElementsByClassName("animate")) {
                elm.classList.remove("animate__animated");
            };


            let title = check.parentNode.parentNode.childNodes[1].innerText;
            let description = check.parentNode.parentNode.querySelector("p").innerText;
            // console.log(tit);

            let cardCom = check.parentNode.parentNode.parentNode.parentNode;
            cardCom.classList.add("animate__animated", "animate__backOutLeft")

            setTimeout(function () {
                cardCom.classList.add("d-none");
            }, 1000);


            let cardComTask = `
            <div class="col-12 col-md-6 mb-4 animate animate__animated animate__backInRight">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title text-muted">${title}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>
            `;

            rowComTask.innerHTML += cardComTask;


        })

    }
}

function clickDelete() {
    for (let delet of checkDelete) {
        delet.addEventListener("click", function () {
            // alert("salam");

            let cardCom = delet.parentNode.parentNode.parentNode.parentNode;
            cardCom.classList.add("animate__animated", "animate__backOutUp")

            setTimeout(function () {
                cardCom.classList.add("d-none");
            }, 1000);
        })
    }
}

function clickEdit() {
    for (let edit of checkEdit) {
        edit.addEventListener("click", function () {

            let title = edit.parentNode.parentNode.childNodes[1];
            let description = edit.parentNode.parentNode.querySelector("p");

            titleInput.value = title.innerText;
            descriptionInput.value = description.innerText;

            addBtn.classList.add("d-none");
            // editBtn.classList.remove("d-none");

            let editBtn = document.createElement("button");
            editBtn.classList.add("btn", "btn-success");
            editBtn.innerHTML = `Edit <i class="bi bi-pencil-square ms-1"></i>`;
            toDoApp.appendChild(editBtn);

            editBtn.addEventListener("click", function () {
                title.innerText = titleInput.value;
                description.innerText = descriptionInput.value;

                titleInput.value = "";
                descriptionInput.value = "";

                editBtn.classList.add("d-none");
                addBtn.classList.remove("d-none");
            })
        });
    }
}
