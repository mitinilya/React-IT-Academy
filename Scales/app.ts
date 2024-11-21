class Product {
    name: string;
    weight: number;
    constructor (_name:string, _weight:number) {
        this.weight =_weight;
        this.name = _name;
    }
    getScale():number{
        return this.weight;
    }
    getName():string {
        return this.name
    }

}

class Apple extends Product {
    constructor(_name:string, _weight:number) {
        super(_name,_weight);
    }
    }



class Tomato extends Product {
    constructor(_name:string, _weight:number) {
        super(_name,_weight);
    }
}

class Scale {
    products: Product [] = [];
    add (product: Product):void {
        this.products.push(product);
    }

    getSumScale():number {
        let total:number = 0;
        for (let product of this.products) {
            total += product.getScale();
        }
        return total;
    }
    
    getNameList():string[] {
        let arrayOfProducts = this.products.map((product)=>product.getName());
        return arrayOfProducts;

    }

}

let apple1: Apple = new Apple ("Яблоко1", 1.6);
let apple2: Apple = new Apple ("Яблоко2", 1.7);
let apple3: Apple = new Apple ("Яблоко3", 1.8);

let tomato1: Tomato = new Tomato("Помидор1",1.2);
let tomato2: Tomato = new Tomato("Помидор2",1.4);
let tomato3: Tomato = new Tomato("Помидор3",1.5);

let scales: Scale = new Scale();
scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
console.log("Вес всех продуктов \n " +scales.getSumScale());
console.log("Все продукты на весах", scales.getNameList());




