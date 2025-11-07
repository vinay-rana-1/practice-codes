const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainImage = document.getElementById('mainImage');

// ✅ When "Yes" is clicked — change image
yesBtn.addEventListener('click', () => {
 erm.style.opacity = 0;
  setTimeout(() => {
    erm.src = 'oh-yay.gif'; // 👉 Replace with your image
    erm.style.opacity = 1;
  }, 300);
});

// 🚀 When mouse moves near "No" — it runs away!
noBtn.addEventListener('mouseover', () => {
  const body = document.body;
  const btnRect = noBtn.getBoundingClientRect();

  const x = Math.random() * (window.innerWidth - btnRect.width);
  const y = Math.random() * (window.innerHeight - btnRect.height);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
