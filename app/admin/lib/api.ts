const API_URL =
  "https://script.google.com/macros/s/AKfycby7HnYojREucqhi60SYEpvXnrYR7XGnzrkY0SEloPKgXquVDqquqqtIXpsSawRj8YD0/exec?action=dashboard";

export async function getOrders() {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  return res.json();
}
