const main = document.getElementById('main');

function create_cards(count_card) {
  for (let i = 0; i < count_card; i++) {
    const card_render = document.createElement('div');
    const header_card = document.createElement('div');
    const h2_title = document.createElement('h2');
    const card_main = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const btn_card = document.createElement('button');
    const price = document.createElement('div');
    const image_back = document.createElement('div');
    const subtitle = document.createElement('p');

    card_render.classList.add('card');
    header_card.classList.add('header-card');
    h2_title.setAttribute('id', 'h2');
    h2_title.textContent = 'Card Example';
    card_main.classList.add('card-main');
    div_image.classList.add('card-image');
    image_card.setAttribute('src','Images/img_Card.jpg'); 
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img');
    price.classList.add('price') 
    image_back.setAttribute('src', '/Card2/Images/The_Legend_of_Zelda_Mountains_Warriors_Scenery_516269_1920x1080.jpg')
    image_back.setAttribute('alt', 'Legend Of Zelda');
    image_back.classList.add('img')
    btn_card.setAttribute('id','btn-card');
    subtitle.classList.add('subtitle');
    btn_card.textContent = 'More...';
    

    div_image.appendChild(image_card);
    header_card.appendChild(h2_title);
    card_render.appendChild(header_card);
    card_render.appendChild(card_main);
    card_render.appendChild(div_image);
    card_render.appendChild(price);
    card_render.appendChild(btn_card);
    
    main.appendChild(card_render);
  }
}

create_cards(5);

