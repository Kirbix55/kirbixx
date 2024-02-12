document.addEventListener('DOMContentLoaded', function() {
  const heart = document.getElementById('heart');
  const content = document.getElementById('content');
  const imageContainer = document.getElementById('imageContainer');
  const showButton = document.getElementById('showButton');

  heart.addEventListener('click', () => {
    heart.style.transform = 'scale(2)';
    setTimeout(() => {
      heart.style.transform = 'scale(1)';
      content.style.opacity = '1';
      content.style.display = 'block';
      heart.style.opacity = '0';
      setTimeout(() => {
        heart.style.display = 'none';
        showButton.style.display = 'block'; // Show the button after the content is revealed
      }, 500);

      // Add the "scroll down" message below the emoji with a delay of 1 second
      setTimeout(() => {
        const scrollText = document.createElement('div');
        scrollText.textContent = '↓Scroll down↓';
        scrollText.style.position = 'absolute';
        scrollText.style.top = 'calc(50% + 50px)';
        scrollText.style.left = '50%';
        scrollText.style.transform = 'translateX(-50%)';
        scrollText.style.color = 'black';
        scrollText.style.fontSize = '35px';
        document.body.appendChild(scrollText);
      }, 1000);
    }, 300);
  });

  function addImages() {
    const images = [
      'image1.png', 'image2.png', 'image3.png',
      'image4.png', 'image5.png', 'image6.png',
    ];

    imageContainer.innerHTML = '';

    images.forEach(imagePath => {
      const img = document.createElement('img');
      img.src = imagePath;
      img.style.width = '200px';
      img.style.height = 'auto';
      img.style.marginBottom = '20px';
      imageContainer.appendChild(img);
    });
  }

  showButton.addEventListener('click', () => {
    addImages();
    showButton.style.display = 'none'; // Hide the button after clicked
  });
});