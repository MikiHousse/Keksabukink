import { mapAdds } from "./data.js";

const cardTemplate = document.querySelector('#card').content.querySelector('.card');
const mapList = document.querySelector('.map');

const renderAdd = ({title}) => {
  const mapPreview = cardTemplate.cloneNode(true);

  mapPreview.querySelector('.popup__title').textContent = title;
  // mapPreview.querySelector('.popup__text--price')

  return mapPreview;
};

const renderAdds = () => {
  let addListFragment = document.createDocumentFragment();

  mapAdds.forEach(( mapAdd ) => {
    addListFragment.appendChild(renderAdd( mapAdd ));
  });

  mapList.appendChild(addListFragment);

};

export { renderAdds };
