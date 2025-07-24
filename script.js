async function getSignal() {
  const pair = document.getElementById("pair").value.replace("/", "");
  const time = document.getElementById("time").value.replace("min", "min");
  const signalDiv = document.getElementById("signal");

  signalDiv.innerText = "Fetching signal...";

  try {
    // Real API Call
    let response = await fetch(`https://api.twelvedata.com/time_series?symbol=${pair}&interval=${time}&apikey=b45c80f5cbe2490d9ade12a3b3e9480a`);
    let data = await response.json();

    if (!data || !data.values || data.status === "error") {
      throw new Error("Invalid data");
    }

    const latest = data.values[0];
    const open = parseFloat(latest.open);
    const close = parseFloat(latest.close);

    const signal = close > open ? "BUY ✅" : "SELL 🔻";
    signalDiv.innerText = `${pair} | ${time} = ${signal}`;
    signalDiv.style.color = signal.includes("BUY") ? "#00ff00" : "#ff0000";

  } catch (err) {
    signalDiv.innerText = "No data for this pair. ❌";
    signalDiv.style.color = "red";
  }
      }
