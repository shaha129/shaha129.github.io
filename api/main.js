// Wrap around array given delta from index.
function createWrapAround(array) {
  const minVal = 0;

  return (currentIndex, delta) => {
    const maxVal = array.length;

    if (delta >= 0) {
      currentIndex = (currentIndex + delta - minVal) % maxVal + minVal;
    } else {
      currentIndex =
        (currentIndex + delta + maxVal * -delta - minVal) % maxVal + minVal;
    }

    return currentIndex;
  };
}

const slideContainer = document.querySelector(".image-slide-wrapper");
const slideURLs = [
  "Purple.png",

  "purple1.png",

  "purple2.png",
  "purple3.png",
  "purple4.png",
  "purple5.png"
];

const imageSlides = slideURLs.map((slideURL, index) => {
  const slide = document.createElement("div");
  slide.classList.add("image-slide");
  slide.style.backgroundImage = `url(${slideURL})`;
  slide.dataset.slideIndex = index;

  slide.addEventListener("click", navigateToSlide.bind(null, index));

  slideContainer.appendChild(slide);
  return slide;
});
const getIndex = createWrapAround(imageSlides);

const slidePickerContainer = document.querySelector(".slide-picker");
const slidePickers = imageSlides.map((slide, index) => {
  const slidePicker = document.createElement("div");
  slidePicker.type = "button";
  slidePicker.className = "btn btn-circle";
  slidePicker.innerHTML = "<svg><circle /></svg>";

  slidePicker.addEventListener("click", navigateToSlide.bind(null, index));
  slidePickerContainer.appendChild(slidePicker);

  return slidePicker;
});

let currentIndex = 0;

function getVisibleSlides(selectedIndex) {
  return [
    getIndex(selectedIndex, -1),
    selectedIndex,
    getIndex(selectedIndex, 1)
  ].map(index => imageSlides[index]);
}

function navigateToSlide(selectedIndex) {
  currentIndex = selectedIndex;
  const [previousSlide, selectedSlide, nextSlide] = getVisibleSlides(
    selectedIndex
  );

  imageSlides.forEach(slide => {
    slide.classList.toggle("previous", slide === previousSlide);
    slide.classList.toggle("selected", slide === selectedSlide);
    slide.classList.toggle("next", slide === nextSlide);
  });

  requestAnimationFrame(() => {
    slidePickers.forEach((slidePicker, index) => {
      slidePicker.classList.toggle("selected", index === selectedIndex);
    });
  });
}

const navButtons = Array.from(document.querySelectorAll(".btn-nav"));

navButtons.forEach(navButton => {
  const delta = parseInt(navButton.dataset.delta, 10);

  navButton.addEventListener("click", () => {
    navigateToSlide(getIndex(currentIndex, delta));
  });
});

navigateToSlide(1);
