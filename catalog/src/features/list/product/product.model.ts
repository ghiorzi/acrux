export class Product {

    public id: string;
    public name: string;
    public price: number;
    public thumbnail: string;

    constructor(id: string, name: string, price: number, thumbnail: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
    }
    
}