const products = [
    { id: 1, name: "Mascarilla facial hidratante", price: 600, category: "faciales", image: './assets/mascarilla_hidratante.jpg' },
    { id: 2, name: "Serum acido hialuronico", price: 1500, category: "faciales", image: './assets/mascarilla_hidratante.jpg' },
    { id: 3, name: "Crema descongestionante", price: 2500, category: "faciales", image: './assets/mascarilla_hidratante.jpg' },
    { id: 4, name: "Crema con enzima Q-10", price: 5000, category: "faciales",image: './assets/mascarilla_hidratante.jpg' },
    { id: 5, name: "Mascarilla hidratante", price: 3500, category: "capilares", image: './assets/mascarilla_hidratante.jpg' },
    { id: 6, name: "Shampoo aclarante natural", price: 4500, category: "capilares", image: './assets/mascarilla_hidratante.jpg' },
    { id: 7, name: "Shampoo anti caspa", price: 3900, category: "capilares", image: './assets/mascarilla_hidratante.jpg' },
    { id: 8, name: "Acondicionador reparador", price: 6000, category: "capilares", image: './assets/mascarilla_hidratante.jpg' },
    { id: 9, name: "Crema anti-celulitis", price: 5500, category: "corporales", image: './assets/mascarilla_hidratante.jpg'},
    { id: 10, name: "Crema para pieles secas", price: 3650, category: "corporales", image: './assets/mascarilla_hidratante.jpg' },
    { id: 11, name: "Serum extra-hidratante", price: 9000, category: "corporales", image: './assets/mascarilla_hidratante.jpg' },
    { id: 12, name: "Crema bronceadora natural", price: 10000, category: "corporales", image: './assets/mascarilla_hidratante.jpg' }
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((p) => p.id === id);
        product ? resolve(product) : reject("No existe el producto");
      }, 1000);
    });
  };
  
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = category
          ? products.filter((product) => product.category === category)
          : products;
        resolve(filteredProducts);
      }, 1000);
    });
  };

