export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwF54tHs0Sz4sUK67hJu_7jEXp8NqYZo2X2VsbspLut6Ybo4MT_fw_g9WyAtrOWDPSn/exec",
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
