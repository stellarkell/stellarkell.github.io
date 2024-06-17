const bgImages = ['dino-stagger.png', 'ghost-stagger.png', 'mushroom-stagger.png'];

window.onload = () => {
  const selectedIndex = Math.floor(Math.random() * bgImages.length);
  const bgImageURL = `/assets/images/${bgImages[selectedIndex]}`;
  document.querySelector('div#bg').style.backgroundImage = `url("${bgImageURL}")`;
}
