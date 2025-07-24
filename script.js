async function getSignal() {
  const pair = document.getElementById("pair").value;
  const time = document.getElementById("time").value;
  const signalDiv = document.getElementById("signal");

  signalDiv.innerText = "Fetching signal...";

  try {
    // 🔥 Replace below with real API later
    // let response = await fetch(`https://api.example.com/signal?pair=${pair}&time=${time}`);
    // let data = await response.json();

    // Simulated signal (for now)
    const signals = ["BUY ✅", "SELL 🔻", "WAIT ⏳"];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];

    signalDiv.innerText = `${pair} | ${time} = ${randomSignal}`;
    signalDiv.style.color = randomSignal.includes("BUY") ? "#00ff00" :
                            randomSignal.includes("SELL") ? "#ff0000" : "#ffcc00";

  } catch (err) {
    signalDiv.innerText = "Error fetching signal.";
    signalDiv.style.color = "red";
  }
}
