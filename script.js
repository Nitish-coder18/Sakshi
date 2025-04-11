const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartsContainer = document.getElementById('hearts');

// "No" button click -> move randomly within container
noBtn.addEventListener('click', () => {
  const container = document.querySelector('.container');
  const offsetX = Math.random() * 60 - 30;
  const offsetY = Math.random() * 60 - 30;

  let newX = noBtn.offsetLeft + offsetX;
  let newY = noBtn.offsetTop + offsetY;

  newX = Math.max(0, Math.min(container.clientWidth - noBtn.clientWidth, newX));
  newY = Math.max(0, Math.min(container.clientHeight - noBtn.clientHeight, newY));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" button click -> hearts fly
yesBtn.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "<i class='fas fa-heart'></i>";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 24 + 16}px`;
    heart.style.color = "#ff4081";
    heart.style.animation = `fly ${Math.random() * 3 + 2}s linear forwards`;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  yesBtn.innerHTML = "<i class='fas fa-heart'></i> Yayyy Sakshi! 🥳";
});
