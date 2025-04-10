const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartsContainer = document.getElementById('hearts');

// NO Button click => small shift within center area
noBtn.addEventListener('click', () => {
  const container = document.querySelector('.container');
  const btnRect = noBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Small range movement within the container
  const offsetX = Math.random() * 60 - 30;  // -30 to +30 px
  const offsetY = Math.random() * 60 - 30;

  let newX = noBtn.offsetLeft + offsetX;
  let newY = noBtn.offsetTop + offsetY;

  // Restrict inside container
  newX = Math.max(0, Math.min(container.clientWidth - noBtn.clientWidth, newX));
  newY = Math.max(0, Math.min(container.clientHeight - noBtn.clientHeight, newY));

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// YES Button (same as before)
yesBtn.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 24 + 16}px`;
    heart.style.animation = `fly ${Math.random() * 3 + 2}s linear forwards`;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  yesBtn.innerText = "Yayyy! You're my friend Sakshi! 🥳";
});

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fly {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
