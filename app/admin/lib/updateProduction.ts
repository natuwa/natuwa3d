export async function updateProduction(data: {
  orderId: string;
  printingTime: string;
  paintingTime: string;
  trackingNo: string;
  courier: string;
  notes: string;
}) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby7HnYojREucqhi60SYEpvXnrYR7XGnzrkY0SEloPKgXquVDqquqqtIXpsSawRj8YD0/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "updateProduction",
        ...data,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update production");
  }

  return await response.json();
}
