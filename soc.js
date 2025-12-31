let watchId = null;

function startTracking() {
  if (!navigator.geolocation) {
    status("Geolocation not supported");
    return;
  }

  status("Searching satellites...");

  watchId = navigator.geolocation.watchPosition(
    pos => {
      const { latitude, longitude, accuracy } = pos.coords;

      document.getElementById("lat").innerText = latitude;
      document.getElementById("lon").innerText = longitude;
      document.getElementById("acc").innerText = accuracy.toFixed(1);

      if (accuracy <= 10) {
        status("High accuracy lock ✅");
      } else {
        status("Improving accuracy...");
      }
    },
    err => {
      status("Permission denied or error");
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000
    }
  );
}

function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    status("Tracking stopped");
  }
}

function status(msg) {
  document.getElementById("status").innerText = msg;
}
