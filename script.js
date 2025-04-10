const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartsContainer = document.getElementById('hearts');

// Make the "No" button run away 😆
noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${i}px`;
  noBtn.style.top = `${j}px`;
});

// Yes Button creates floating hearts 💖
yesBtn.addEventListener('click', () => {
  for(let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `100%`;
    heart.style.fontSize = `${Math.random() * 24 + 16}px`;
    heart.style.animation = `fly ${Math.random() * 3 + 2}s linear forwards`;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  yesBtn.innerText = "Yayyy! You're my friend! 😍";
});

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fly {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
