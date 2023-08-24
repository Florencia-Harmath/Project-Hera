const products = [
    { id: 1, name: "Mascarilla facial hidratante", price: 600, category: faciales },
    { id: 2, name: "Serum con acido hialuronico", price: 1500, category: faciales },
    { id: 3, name: "Crema descongestionante de ojeras", price: 2500, category: faciales },
    { id: 4, name: "Crema nocturna con enzima Q-10", price: 5000, category: faciales },
    { id: 5, name: "Mascarilla capilar hidratante", price: 3500, category: capilares },
    { id: 6, name: "Shampoo aclarante natural", price: 4500, category: capilares },
    { id: 7, name: "Shampoo antio caspa hombre", price: 3900, category: capilares },
    { id: 8, name: "Acondicionador reparador de puntas", price: 6000, category: capilares },
    { id: 9, name: "Crema anti-celulitis", price: 5500, category: corporales },
    { id: 10, name: "Crema para pieles secas", price: 3650, category: corporales },
    { id: 11, name: "Serum extra-hidratante", price: 9000, category: corporales },
    { id: 12, name: "Crema bronceadora natural", price: 10000, category: corporales }
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = product.find((p) => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject("Producto no encontrado");
            }
        }, 900);
    });
};

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter((product) => product.category === category) : products;

            resolve(productsFiltered);
        }, 1000);
    });
};

