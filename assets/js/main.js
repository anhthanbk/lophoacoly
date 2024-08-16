// Khai báo biến
const listImage = document.querySelector('.list-images');
const imgs = listImage.getElementsByTagName('img');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const length = imgs.length;
let current = 0;

// Khai bao biến bằng các công thức
const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  }
};
let handleEvent = setInterval(handleChangeSlide, 4000);

// Chạy các công thức
btnRight.addEventListener('click', () => {
  clearInterval(handleEvent);
  handleChangeSlide();
  handleEvent = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener('click', () => {
  clearInterval(handleEvent);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  }
  handleEvent = setInterval(handleChangeSlide, 4000);
});
