export class Holding {
    base: string;
    quantity: number;
    value: number;
    displayValue: string;

    constructor() {
        this.base = "BTC";
        this.quantity = 0;
        this.value = 0;
        this.displayValue = "0.00";
    }
}