const products = [
  {
    id: 1,
    name: "Mascarilla facial hidratante",
    price: 600, category: "faciales",
    image: '/img/facial-mascarilla.jpeg',
    detalle: "Nuestra mascarilla facial hidratante es ideal para pieles mixtas unisex, de uso diario. Hidrata y humecta la piel, retira el exceso de grasa, mejora la apariencia de poros, elimina impurezas y ayuda a reducir los signos de envejecimiento."
  },
  { 
    id: 2, 
    name: "Serum acido hialuronico", 
    price: 1500, 
    category: "faciales", 
    image: '/img/facial-serum.jpeg',
    detalle: "El ácido hialurónico de cadena corta penetra la piel en profundidad y ayuda a conservar la hidratación en el tejido conjuntivo. Esto no solo mantiene el volumen y la firmeza de la piel, sino que también reduce las arrugas."
   },
  { id: 3, 
    name: "Crema descongestionante", 
    price: 2500, 
    category: "faciales", 
    image: '/img/facial-descong.jpeg',
    detalle: "El tónico facial descongestiona nuestro cutis, lo refresca y nos devuelve el aspecto suave y luminoso. Tonificar también ayuda a mejorar la circulación de la sangre y a promover la regeneración celular de la piel."
   },
  { id: 4, 
    name: "Crema con enzima Q-10", 
    price: 5000, 
    category: "faciales", 
    image: '/img/facial-qdiez.jpeg',
    detalle: "Ayuda a unificar el tono, es antiinflamatoria. Mejora la hidratación. Es un activo apto para todos los tipos de piel (penetra de forma gradual y es segura), aunque los especialistas lo sugieren especialmente para las pieles maduras, fotoenvejecidas o envejecidas por la contaminación."
   },
  { id: 5, 
    name: "Mascarilla nutritiva", 
    price: 3500, 
    category: "capilares", 
    image: '/img/capilar-nutritiva.jpeg',
    detalle: "El cabello se sentirá más suelto y manejable. Podrás desenredarlo con facilidad, evitando la formación de nudos. Obtienes suavidad y brillo. Es fundamental para ayudar al crecimiento del pelo. Nutre las puntas maltratadas."
   },
  { id: 6, 
    name: "Shampoo aclarante natural", 
    price: 4500, 
    category: "capilares", 
    image: '/img/capilar-aclarante.jpeg',
    detalle: "Ayuda a aclarar progresivamente tu cabello con cada lavado. Fortalece el cabello y aumenta el brillo de cada hebra capilar. INGREDIENTES NATURALES: Su fórmula cuenta con con JALEA REAL y extractos de MANZANILLA, BARDANA, ROMERO y ALOE VERA."
   },
  { id: 7, name: "Shampoo anti caspa", 
  price: 3900, 
  category: "capilares", 
  image: '/img/capilar-caspa.jpeg',
  detalle: "Evita que el Malassezia globosa, el microbio que causa la caspa, forme sustancias irritantes del cuero cabelludo. Contiene Cloruro de sodio y xilen sulfonato de sodio: estos dos ingredientes se utilizan para regular qué tan espeso es el shampoo en la última fase de la producción hasta obtener la textura deseada."
 },
  { id: 8, 
    name: "Acondicionador reparador", 
    price: 6000, 
    category: "capilares", 
    image: '/img/capilar-acondicionador.jpeg',
    detalle: "El acondicionador protege y suaviza el cabello tras el uso del champú, cierra cutículas, restablece la hidratación, desenreda, facilita el peinado, previene la rotura de puntas y reduce el encrespamiento."
   },
  { id: 9, 
    name: "Crema anti-celulitis", 
    price: 5500, 
    category: "corporales", 
    image: '/img/corporal-celulitis.jpeg',
    detalle: "Mejoran el aspecto de la piel, acabando con la piel de naranja. Puedes aplicarlas en cualquier momento. Ayudan a combatir la retención de líquidos. La piel se vuelve más elástica."
   },
  { id: 10, 
    name: "Crema para pieles secas", 
    price: 3650, 
    category: "corporales", 
    image: '/img/corporal-piel-seca.jpeg',
    detalle: "Las zonas resecas desaparecen, eliminando así la conocida como piel de cocodrilo. La piel se mantiene más fresca al poseer mayor cantidad de agua. El rostro se muestra con mayor elasticidad,desapareciendo así las sensaciones tirantes."
   },
  { id: 11, 
    name: "Serum extra-hidratante", 
    price: 9000, 
    category: "corporales", 
    image: '/img/corporal-hidratante.jpeg',
    detalle: "La hidratación es el principal beneficio de utilizar crema corporal. Se obtiene una piel reparada. ¿Has notado que tu piel se escama o tiene pequeños puntitos rojos? Eta crema es ideal. Rejuvenece, aporta más firmeza y más suavidad"
   },
  { id: 12, 
    name: "Crema bronceadora natural", 
    price: 10000, 
    category: "corporales", 
    image: '/img/corporal-bronceado.jpeg',
    detalle: "Estas cremas potencian la síntesis de melanina, que es la molécula responsable del bronceado natural de la piel. Se formulan a partir de principios activos relacionados con la melanina o con el proceso de melanización en el que intervienen la tirosina, tirosinasa, la dopa, etc." 
  }
];

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      product ? resolve(product) : reject("No existe el producto");
    }, 1200);
  });
};

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;
      resolve(filteredProducts);
    }, 1200);
  });
};

