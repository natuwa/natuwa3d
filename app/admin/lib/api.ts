const API_URL =
  "https://script.google.com/macros/s/AKfycbxTZs29V6KUcXMpd0wBtw0R9bWorm-VZS4BM8V4QXlWBMdBubRmckHLMo0oLA35zoRJ/exec?action=dashboard";

export async function getOrders() {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  return res.json();
}
