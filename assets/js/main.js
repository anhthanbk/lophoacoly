const listImage = document.querySelector('.list-images');
const imgs = listImage.getElementsByTagName('img');
const length = imgs.length;
let current = 0;

setInterval(() => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  }
}, 4000);

// Hiệu ứng tuyết rơi
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Thiết lập kích thước của bông tuyết ngẫu nhiên
  const size = Math.random() * 10 + 5 + 'px';
  snowflake.style.width = size;
  snowflake.style.height = size;

  // Vị trí ngang ngẫu nhiên
  snowflake.style.left = Math.random() * window.innerWidth + 'px';

  // Tốc độ rơi ngẫu nhiên
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

  // Thời gian trễ ngẫu nhiên
  snowflake.style.animationDelay = Math.random() * 5 + 's';

  // Áp dụng animation cho bông tuyết
  snowflake.style.animationName = 'fall';
  snowflake.style.animationTimingFunction = 'linear';

  document.getElementById('snowflakes').appendChild(snowflake);

  // Loại bỏ bông tuyết sau khi nó rơi xuống
  setTimeout(() => {
    snowflake.remove();
  }, 7000); // 7 giây để đảm bảo bông tuyết rơi hết trang
}

// Tạo bông tuyết mỗi 100ms
setInterval(createSnowflake, 100);
