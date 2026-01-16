const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let escapes = 0;

// initial position
noBtn.style.left = "215px";
noBtn.style.top = "300px";

function escape() {
  const card = document.querySelector(".card");

  const maxX = card.clientWidth - noBtn.clientWidth;
  const maxY = card.clientHeight - noBtn.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// NO hover
noBtn.addEventListener("mouseenter", () => {
  escapes++;
  noBtn.innerText = escapes <= 3 ? "💥" : "🤯";
  escape();
});

// YES click
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      background:linear-gradient(135deg,#43e97b,#38f9d7);
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      font-family:Poppins;
    ">
      <div style="
        background:white;
        padding:45px;
        border-radius:24px;
        box-shadow:0 30px 60px rgba(0,0,0,0.35);
        animation: scaleIn 0.6s ease;
      ">
        <h1>✅ Error Gone 🫡</h1>
        <p>Bug fixed successfully.<br>Debugger energy unlocked 😎</p>
      </div>
    </div>
  `;
});
