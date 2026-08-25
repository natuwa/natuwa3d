const API_URL =
  "https://script.google.com/macros/s/AKfycbwF54tHs0Sz4sUK67hJu_7jEXp8NqYZo2X2VsbspLut6Ybo4MT_fw_g9WyAtrOWDPSn/exec?action=dashboard";

export async function getOrders() {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  return res.json();
}
