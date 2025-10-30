const [lon, lat] = listing.geometry.coordinates;
console.log(listing.geometry.coordinates);
const map = L.map("map").setView([lat, lon], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([lat, lon]).addTo(map).bindPopup("You are here!").openPopup();
