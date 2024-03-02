import { Customer } from "./customer";

export class Supplier extends Customer{
    acc_number: string
    constructor(acc_number: string){
        super()
        this.acc_number = acc_number
    }
    invoices = {}
}