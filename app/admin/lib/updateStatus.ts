export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  const response = await fetch(
    "https://script.google.com/macros/library/d/1xJXMbCy3wuR1bpQvLD_C0VzHh4ipj-SIbYzleHy2D8y8Wgiq-gpbrmr2/6",
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
