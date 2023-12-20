const veryData = document.getElementById("veryData")
const dNone = document.querySelectorAll(".dNone")
veryData.addEventListener("click", function () {
    dNone.forEach(item => {
        item.classList.toggle("dNone")
        let statusdNone = item.classList.contains("dNone")
        veryData.innerHTML = statusdNone ? "Daha çox" : "Daha az"
    })
})
const btn = document.querySelector(".btn button")
const courses = document.querySelectorAll(".courses div")
// courses.forEach(item=>item.style.display="none")
let cardCount = 9
function cardShow() {
    for (let i = 0; i < cardCount; i++) {
        courses[i].style.display = "block"
    }
    for (let i = cardCount; i < courses.length; i++) {
        courses[i].style.display = "none"
    }
}
cardShow()
btn.addEventListener("click", function () {
    cardCount += (btn.innerHTML == "Daha çox") ? 3 : -12
    btn.innerHTML = (cardCount == courses.length) ? "Daha az" : "Daha çox"
    cardShow()
})
const sideBar = document.getElementById("sidebar")
const xIcon = document.querySelector(".fa-xmark")
const barsIcon = document.querySelector(".fa-bars")
xIcon.addEventListener("click", function () {
    sideBar.classList.add("transform")
})
barsIcon.addEventListener("click", function () {
    sideBar.classList.remove("transform")
})

function SendMail() {
    let params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_mwgqj5b", "template_t6ya9mh", params)
        .then(function (response) {
            alert("Success")
        }, function (err) {
            console.log('FAILED...', err);
        });
        document.getElementById("fullname").value=""
        document.getElementById("email_id").value=""
        document.getElementById("message").value=""
        
}