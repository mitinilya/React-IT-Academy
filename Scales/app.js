var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.weight = _weight;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Tomato;
}(Product));
var Scale = /** @class */ (function () {
    function Scale() {
        this.products = [];
    }
    Scale.prototype.add = function (product) {
        this.products.push(product);
    };
    Scale.prototype.getSumScale = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            total += product.getScale();
        }
        return total;
    };
    Scale.prototype.getNameList = function () {
        var arrayOfProducts = this.products.map(function (product) { return product.getName(); });
        return arrayOfProducts;
    };
    return Scale;
}());
var apple1 = new Apple("Яблоко1", 1.6);
var apple2 = new Apple("Яблоко2", 1.7);
var apple3 = new Apple("Яблоко3", 1.8);
var tomato1 = new Tomato("Помидор1", 1.2);
var tomato2 = new Tomato("Помидор2", 1.4);
var tomato3 = new Tomato("Помидор3", 1.5);
var scales = new Scale();
scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
console.log("Вес всех продуктов \n " + scales.getSumScale());
console.log("Все продукты на весах", scales.getNameList());
//# sourceMappingURL=app.js.map