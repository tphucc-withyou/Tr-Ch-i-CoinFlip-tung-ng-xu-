function flipCoin(userChoice) {
  const outcomes = ['heads', 'tails'];
  const randomIndex = Math.floor(Math.random() * 2);
  const coinResult = outcomes[randomIndex];

  let message = `Kết quả là: ${coinResult === 'heads' ? 'Ngửa' : 'Sấp'} – `;

  if (userChoice === coinResult) {
    message += "🎉 Bạn đoán đúng!";
  } else {
    message += "❌ Bạn đoán sai rồi.";
  }

  document.getElementById("result").textContent = message;
}
