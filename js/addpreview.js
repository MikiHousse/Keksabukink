import mapAdds from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const popup = document.querySelector('.popup');

const renderAdd = ({title}) => {
  const mapPreview = cardTemplate.cloneNode(true);

  mapPreview.querySelector('.popup__title').textContent = title;
  // mapPreview.querySelector('.popup__text--price')

  return mapPreview;
};

const renderAdds = () => {
  let addListFragment = document.createDocumentFragment();

  mapAdds.forEach((mapAdd) => {
    addListFragment.appendChild(renderAdd(mapAdd));
  });

  popup.appendChild(addListFragment);

};

// eslint-disable-next-line no-console
console.log(renderAdds);

export { renderAdds };
