export class Product {

    private _id: string;
    private _name: string;
    private _price: string;
    private _thumbnail: string;

    constructor(id: string, name: string, price: string, thumbnail: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._thumbnail = thumbnail;
    }
}