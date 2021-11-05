productos = [
  {
    id:1,nombre:'FIFA 21', img:'Images/FIFA21.png', precio:50000
  },
  {
    id:2,nombre:'God of War Ragnarok', img:'Images/God Of War.jpg', precio:50000
  },
  {
    id:3,nombre:'Rogue Company',img:'',precio:50000
  },
  {
    id:4,nombre:'Rocket League',img:'',precio:50000
  },
  {
    id:5,nombre:'Call of Duty Warzone',img:'',precio:50000
  },
  {
    id:6,nombre:'Resident Evil 3 Remastered',img:'',precio:50000
  },
  {
    id:7,nombre:'Halo Infinite',img:'',precio:50000
  }
];

carrito = []

const container_productos = document.querySelector('#main');
const btn_carrito = document.querySelector('#btn-card');
const card = document.querySelector('#card');

const restarProducto = (e) => {
    let item = e.target.getAttribute('id_product') 
    carrito.splice(parseInt(carrito.indexOf(item)),1)
    mostrarCarito();
}

const eliminarProducto = (e) => {
    let item = e.target.getAttribute('id_product');
    
    carrito = carrito.filter((id_producto) => {
        return id_producto !== item;
    });

    mostrarCarrito();
}

const mostrarProductos = () => {
    productos.forEach(items => {
        const card_producto = document.createElement('div');
        const nombre_producto = document.createElement('p');
        const precio_producto = document.createElement('p');
        const btn_agregar_carrito = document.createElement('button');
        const image_card = document.createElement('img')

        nombre_producto.textContent = items.nombre
        precio_producto.textContent = items.precio
        btn_agregar_carrito.setAttribute('id_product', items.id)        
        btn_agregar_carrito.textContent = 'Agregar al carrito';
        card_producto.classList.add('card');
        btn_agregar_carrito.classList.add('button');
        btn_agregar_carrito.addEventListener('click', agregarCarrito);
        image_card.setAttribute('src',items.img); 
        

        card_producto.appendChild(nombre_producto)
        card_producto.appendChild(image_card)
        card_producto.appendChild(precio_producto)
        card_producto.appendChild(btn_agregar_carrito)
        
        container_productos.appendChild(card_producto)

    });
}

const mostrarCarrito = () => {
    cart.innerHTML = ''
    let lista = [...new Set(carrito)]; 
    
    lista.forEach(item => {
        const todos_productos = productos.filter(productos => {
            return productos.id === parseInt(item);
        })

        let cont = 0;

        for(let id of carrito) {
            if(id === item) {
                cont++;
            }
        }
       
        const card_producto_cart = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('p');
        const contador = document.createElement('p');
        const btn_suma = document.createElement('button');
        const btn_resta = document.createElement('button');
        const btn_eliminar = document.createElement('button');
        btn_suma.setAttribute('id_product', todos_productos[0].id);
        btn_resta.setAttribute('id_product',todos_productos[0].id);
        btn_eliminar.setAttribute('id_product',todos_productos[0].id);

        name.textContent = todos_productos[0].nombre;
        price.textContent = todos_productos[0].precio;
        btn_suma.textContent = '+';
        btn_resta.textContent = '-'
        btn_eliminar.textContent = 'X';
        contador.textContent = cont;

        card_producto_cart.classList.add('card_producto')
        card_producto_cart.appendChild(name);
        card_producto_cart.appendChild(price);
        card_producto_cart.appendChild(contador)
        card_producto_cart.appendChild(btn_suma);
        card_producto_cart.appendChild(btn_resta);
        card_producto_cart.appendChild(btn_eliminar)

        btn_suma.addEventListener('click', agregarCarrito);
        btn_resta.addEventListener('click', restarProducto);
        btn_eliminar.addEventListener('click', eliminarProducto)
        cart.appendChild(card_producto_cart);

          
    })
}

const agregarCarrito = (e) => {
    carrito.push(e.target.getAttribute('id_product'));
    mostrarCarito();
}

mostrarProductos();

btn_carrito.addEventListener('click', () => {
    cart.classList.toggle('ocult');
})



























// const main = document.getElementById('main');

// function create_cards(count_card) {
//   for (let i = 0; i < count_card; i++) {
//     const card_render = document.createElement('div');
//     const header_card = document.createElement('div');
//     const h2_title = document.createElement('h2');
//     const card_main = document.createElement('div');
//     const div_image = document.createElement('div');
//     const image_card = document.createElement('img');
//     const btn_card = document.createElement('button');
//     const price = document.createElement('div');
//     const image_back = document.createElement('div');
//     const subtitle = document.createElement('p');

//     card_render.classList.add('card');
//     header_card.classList.add('header-card');
//     h2_title.setAttribute('id', 'h2');
//     h2_title.textContent = 'Card Example';
//     card_main.classList.add('card-main');
//     div_image.classList.add('card-image');
//     image_card.setAttribute('src','Images/img_Card.jpg'); 
//     image_card.setAttribute('alt','Image Card');
//     image_card.classList.add('img');
//     price.classList.add('price') 
//     image_back.setAttribute('src', '/Card2/Images/The_Legend_of_Zelda_Mountains_Warriors_Scenery_516269_1920x1080.jpg')
//     image_back.setAttribute('alt', 'Legend Of Zelda');
//     image_back.classList.add('img')
//     btn_card.setAttribute('id','btn-card');
//     subtitle.classList.add('subtitle');
//     btn_card.textContent = 'More...';
    

//     div_image.appendChild(image_card);
//     header_card.appendChild(h2_title);
//     card_render.appendChild(header_card);
//     card_render.appendChild(card_main);
//     card_render.appendChild(div_image);
//     card_render.appendChild(price);
//     card_render.appendChild(btn_card);
    
//     main.appendChild(card_render);
//   }
// }

// create_cards(5);

