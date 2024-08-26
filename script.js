
var contentElement = document.getElementById('display');
var loadingElement = document.getElementById('loading-container');
contentElement.style.display = 'none';
loadingElement.style.display = 'block';
setTimeout(() => {
      contentElement.style.display = 'block';

      loadingElement.style.display = 'none';

}, 2000);





const timeline = document.querySelector('.line');
const container = document.querySelector('.container');
let listItems = document.querySelectorAll('li');
let listbread = document.querySelectorAll('.circle');
let indicator = document.querySelectorAll('.circle-indicator');
const targetY = window.innerHeight * 0.5;
const Y = document.querySelectorAll('#y');
let prevScrollY = scrollY;
let up, down;
let full = false;

function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent) || window.matchMedia("(max-width: 768px)").matches;
}

function scrollhanderler() {
      let lineRect = timeline.getBoundingClientRect();
      let scrollY = window.scrollY;
      let dist = targetY - lineRect.top;
      set = Math.max(0, dist);

      up = scrollY < prevScrollY;
      down = !up;

      if (!full) {
            timeline.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > container.offsetHeight - 220 && !full) {
            full = true;
            timeline.style.height = `71%`;
      }

      console.log(scrollY)
      prevScrollY = window.scrollY;


      indicator.forEach((item) => {
            let rect = item.getBoundingClientRect();
            if (rect.top + item.offsetHeight / 5 < targetY) {
                  item.style.name = "ellipse"


            }


      })
      if (isMobileDevice()) {
            if (!full) {
                  timeline.style.bottom = `calc(100% - ${set}px)`;
            }

            if (dist > container.offsetHeight - 320 && !full) {
                  full = true;
                  timeline.style.height = `72%`;
            }
      }

      listbread.forEach((item) => {

            let rect = item.getBoundingClientRect();

            if (rect.top + item.offsetHeight / 5 < targetY) {
                  item.style.backgroundColor = 'var(--lord-icon-primary)'
            }
      })
}

document.getElementById('darkModeButton').addEventListener('click', function () {

      document.getElementById('Dark-circle').style.transform = 'translate(-50%, -50%) scale(15)';

      setTimeout(function () {
            document.getElementById('Dark-circle').style.transform = 'translate(-50%, -50%) scale(0)';
      }, 500);
      setTimeout(() => {
            document.body.classList.toggle('dark-mode');
      }, 600);

});

function toggleDropdown() {
      document.querySelector(".dropdown-content").classList.toggle("show");

      document.querySelector(".rotation").classList.toggle("rotated")

}


document.getElementById('cng-lang').addEventListener('click', function () {

      document.getElementById('Dark-circle').style.transform = 'translate(-50%, -50%) scale(15)';

      setTimeout(function () {
            document.getElementById('Dark-circle').style.transform = 'translate(-50%, -50%) scale(0)';
      }, 700);

      setTimeout(() => {

            document.body.classList.toggle('bangla-active');

      }, 500);


      if (document.body.classList.contains('bangla-active')) {
            this.textContent = 'En';
      } else {
            this.textContent = 'বাংলা';
      }


});



scrollhanderler()
timeline.style.display = 'block';
window.addEventListener('scroll', scrollhanderler);










