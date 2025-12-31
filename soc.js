function scanIP() {
  let ip = document.getElementById("ipInput").value;

  let url = ip
    ? `https://ipapi.co/${ip}/json/`
    : "https://ipapi.co/json/";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").innerText = data.ip;
      document.getElementById("country").innerText = data.country_name;
      document.getElementById("isp").innerText = data.org;
      document.getElementById("asn").innerText = data.asn;

      let vpn = data.proxy ? "YES ⚠️" : "NO";
      document.getElementById("vpn").innerText = vpn;

      let score = data.proxy ? 85 : 15;
      document.getElementById("score").innerText = score + "/100";

      document.getElementById("status").innerText =
        score > 50 ? "HIGH RISK 🔴" : "LOW RISK 🟢";
    })
    .catch(() => alert("Scan failed"));
}
