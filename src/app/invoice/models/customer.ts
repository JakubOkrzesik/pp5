export class Customer{
    constructor(){}

    name: string = "";
    nip: number = 0;
    city: string = "";
    street: string = "";
    houseNumber: number = 0;
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true

    getAddress():string {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }

    deserialize(input:any) {
        Object.assign(this,input)
        return this
    }
}