document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('bgBox');
  const originalImage = '2, Háttér/images.jpg';
  const clickedImage = '2, Háttér/hornokpuppy-kutya-husky.jpg';

  div.addEventListener('click', () => {
    div.style.backgroundImage = `url('${clickedImage}')`;

    setTimeout(() => {
      div.style.backgroundImage = `url('${originalImage}')`;
    }, 2000); // 2 másodperc után visszavált
  });
});
