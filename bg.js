document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('.hearts-bg');
  for (let i = 0; i < 10; i++) {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("class", "heart");
    heart.setAttribute("width", "60");
    heart.setAttribute("height", "50");
    heart.style.left = Math.random() * 95 + "vw";
    heart.style.top = Math.random() * 90 + "vh";
    heart.innerHTML = `<path d="M30,10 C30,-10 0,0 0,25 C0,45 30,50 30,50 C30,50 60,45 60,25 C60,0 30,-10 30,10 Z" fill="#fff0fa"/>`;
    bg.appendChild(heart);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');
  const songs = ['song1.mp3.mp3', 'song2.mp3.mp3']; // <-- Add both song filenames here
  let current = 0;

  // Play after user interaction (for autoplay policy)
  function startMusic() {
    audio.play();
    document.removeEventListener('click', startMusic);
  }
  document.addEventListener('click', startMusic);

  audio.addEventListener('ended', function() {
    current = (current + 1) % songs.length;
    audio.src = songs[current];
    audio.play();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('loading-video');
  var loader = document.getElementById('loader');
  if (video) {
    video.onended = function() {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 700); // matches the CSS transition duration
    };
  }
});