export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby7HnYojREucqhi60SYEpvXnrYR7XGnzrkY0SEloPKgXquVDqquqqtIXpsSawRj8YD0/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "updateStatus",
        orderId,
        status,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update status");
  }

  return await response.json();
}
