class ProductManger {


    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products
    }

    addProducts = function ({ title, description, price, thumbnail, code, stock = 10 }) {
        //validacion para que los productos esten completos
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Datos Incompletos")
            return null;
        }
        const Products = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        if (this.products.length === 0) {
            Products.id = 1;
        } else {
            const lastProduct = this.products[this.products.length - 1]
            Products.id = lastProduct.id + 1;
        }
        

        const validateCode = this.products.find(p => p.code === Products.code)
        if (validateCode) {
            console.log("Este codigo de producto esta repetido")
            return null;
        }else{
            this.products.push(Products);
        }

    }
    getProductsById = (ProductsId) => {
            const getId = this.products.findIndex(Products => Products.id === ProductsId)
            if (getId === -1) {
                console.log("Producto no encontrado");
                return null;
            }
        }

}


const productManger = new ProductManger();

const Product = {
    title: "Placa Video Msi Geforce Rtx 3060 Ti Ventus 3x Oc Lhr 8gb",
    description: "GeForce RTX™ 3060 Ti te permite encarar los últimos títulos utilizando todo el poder de Ampere, la 2da generación de arquitectura RTX de NVIDIA.",
    price: 2000,
    thumbnail: "./placa.png",
    code: 123,
};
const Product2 = {
    title: "INTEL CORE I7 12700K S/COOLER S1700",
    description: "En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. .",
    price: 1000,
    thumbnail: "./procesador.png",
    code: 456,
};
productManger.addProducts(Product);
productManger.addProducts(Product2);
console.log(productManger.getProducts());
productManger.getProductsById(1);
productManger.getProductsById(2);
productManger.getProductsById(4);










