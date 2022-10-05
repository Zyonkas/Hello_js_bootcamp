function cuentaClicks(event) {
    alert("click")
}

window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", cuentaClicks)
}
