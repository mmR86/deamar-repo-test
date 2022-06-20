/*********ANIMATION ON SCROLL***********/
const scrollElements = document.querySelectorAll(".js-scroll");

// mičemo vidljivost sa svih elementa koji bi trebali biti vidljivi na scroll
scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

/*********PHOTO GALLERY***********/
const btnX = document.getElementById("btn-x");
const popup = document.getElementById("popup");
const selectedImg = document.getElementById("selectedImg");
const figureN = document.querySelectorAll("figure");
const figure = Array.from(figureN);
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
let imgSrc = "";

//uzimamo svaki figure tag, vrtimo ga u loop-u
figure.forEach((item) => {
  //na svaki od njih ide klik event listener
  item.addEventListener("click", () => {
    //uzimam index broj kliknutog itema u array-u
    let indNo = figure.indexOf(item);
    //activeSlide preuzima redni broj kliknutog image-a
    activeSlide = indNo;
    //kada kliknemo neki od njih, uzimamo mu path od nestanog img-a
    imgSrc = item.getElementsByTagName("img")[0].src;
    console.log(item, activeSlide, imgSrc);
    //taj path bacamo u img u popup prozoru
    selectedImg.src = imgSrc;
    // i spuštamo prozor na 0 da se vidi
    popup.style.transform = "translateY(0)";
  });
});

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > figure.length - 1) {
    activeSlide = 0;
  }
  imgSrc = figure[activeSlide].getElementsByTagName("img")[0].src;
  selectedImg.src = imgSrc;
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = figure.length - 1;
  }
  imgSrc = figure[activeSlide].getElementsByTagName("img")[0].src;
  selectedImg.src = imgSrc;
});

//kada kliknemo na x btn
btnX.addEventListener("click", () => {
  //sakrijemo ga nazad na -100
  popup.style.transform = "translateY(-100%)";
});

// SP MENU on 680px

function toggleMobileMenu() {
  document.getElementById("the-one").classList.toggle("open");
}
