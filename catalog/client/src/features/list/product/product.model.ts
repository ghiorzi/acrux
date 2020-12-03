export class Product {

    public id: string;
    public name: string;
    public price: string;
    public thumbnail: string;

    constructor(id: string, name: string, price: string, thumbnail: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}