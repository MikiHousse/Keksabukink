const cardTemp = document.querySelector('#card').content;

const createPreview = (elem) => {
  const card = cardTemp.cloneNode(true);
  const popup = card.querySelector('.popup');
  const img = popup.querySelector('.popup__avatar');
  const title = popup.querySelector('.popup__title');
  const addres = popup.querySelector('.popup__text--address');
  const price = popup.querySelector('.popup__text--price');
  const type = popup.querySelector('.popup__type');
  const capacity = popup.querySelector('.popup__text--capacity');
  const time = popup.querySelector('.popup__text--time');
  const features = popup.querySelector('.popup__features');
  const description = popup.querySelector('.popup__description');
  const photos = popup.querySelector('.popup__photos');

  img.src = elem.author.avatar;
  title.textContent = elem.offer.title;
  addres.textContent = elem.offer.addres;
  price.textContent = `${elem.offer.price} ₽/ночь`;

  if (elem.offer.type === 'flat') {
    type.textContent = 'Квартира' 
  } else if (elem.offer.type === 'hotel') {
    type.textContent = 'Отель'
  } else if (elem.offer.type === 'house') {
    type.textContent = 'Дом' 
  } else {
    type.textContent = 'Бунгало';
  }

  capacity.textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
  time.textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;

  features.textContent = '';
  if (elem.offer.features) {
    const getFeatures = (arr)  => arr.map((features) => `<li class="popup__feature popup__feature--${features}"></li>`).join('');
    features.insertAdjacetHTML('afterbegin', getFeatures(elem.offer.features));
  }

  description.textContent = elem.offer.description;

  photos.textContent = '';
  if (elem.offer.photos) {
    const getPhotos = (arr) => arr.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('');
    photos.insertAdjacetHTML('afterbegin', getPhotos(elem.offer.photos))
  }

  return popup;
}
console.log(1)
export {createPreview};
