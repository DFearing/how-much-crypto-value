export class Holding {
    base: string;
    quantity: number;
    value: number;
    displayValue: string;

    constructor(base: string = "btc", quantity: number = 0) {
        this.base = base;
        this.quantity = quantity;
        this.value = 0;
        this.displayValue = "0.00";
    }
}