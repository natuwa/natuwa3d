export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  const response = await fetch(
    "YOUR_GOOGLE_SCRIPT_URL",
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

  return response.json();
}
