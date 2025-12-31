navigator.geolocation.getCurrentPosition(
  pos => alert(
    "LAT: " + pos.coords.latitude +
    "\nLON: " + pos.coords.longitude +
    "\nACC: " + pos.coords.accuracy + "m"
  ),
  err => alert(
    "ERROR: " + err.message
  ),
  { enableHighAccuracy: true }
);
