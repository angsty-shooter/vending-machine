import { ProxyState } from "../AppState.js"

class VendingService {
    addMoney(){
        ProxyState.money += 0.25
        console.log("Hello vending service")
    }
}

export const vendingService = new VendingService()