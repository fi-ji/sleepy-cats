const thumbnails = document.querySelectorAll('.gallery__photo-preview');
const fullPhoto = document.querySelector('.full-photo');
const buttons = document.querySelectorAll('.gallery__button');
const titleName = document.querySelector('.gallery__photo-caption span');

const photos = [
  'source/img/grey-large.jpeg',
  'source/img/mixed-large.jpeg',
  'source/img/ginger-large.jpeg',
];

const addClickHandler = (element, photo, index) => {
  element.addEventListener('click', function () {
    const previewTitle = thumbnails[index].querySelector('span');
    fullPhoto.src = photo;
    titleName.textContent = previewTitle.textContent;
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addClickHandler(thumbnails[i], photos[i], i);
  addClickHandler(buttons[i], photos[i], i);
}