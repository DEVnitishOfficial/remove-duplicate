

const addToCartButtons = document.querySelectorAll(`.codingBooks`);

var emptyTrolly = document.getElementById(`blankContainer`);

const audio = new Audio('./alertVoice.mp3');

const selectedImages = [];

addToCartButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const productItem = button.parentElement;
    const productImage = productItem.querySelector(`img`);

    if (selectedImages.some((img) => img.src === productImage.src)) {
        audio.play(); 
      alert(`you have already selected this product!`);
      return;
    }
    const clonedImage = productImage.cloneNode();
    emptyTrolly.appendChild(clonedImage);
    selectedImages.push(clonedImage);
  });
});
