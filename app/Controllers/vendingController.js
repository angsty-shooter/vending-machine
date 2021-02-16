let money = 0
let change = 0.25

function addMoney() {
    money += change
    update()
}

function update() {
    document.getElementById("money").innerText = `${money}`
}