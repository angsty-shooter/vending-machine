import { ProxyState } from "../AppState.js"
import { vendingService } from "../Services/VendingService.js"


function _draw(){
    document.getElementById("money").innerText = `${ProxyState.money}`

}

export default class VendingController{


addMoney() {
    vendingService.addMoney()
    _draw()
    console.log("*cha-chink*")
}
}