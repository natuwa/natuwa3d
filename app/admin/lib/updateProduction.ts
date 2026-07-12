export async function updateProduction(data: {
  orderId: string;
  printingTime: string;
  paintingTime: string;
  trackingNo: string;
  courier: string;
  notes: string;
}) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwF54tHs0Sz4sUK67hJu_7jEXp8NqYZo2X2VsbspLut6Ybo4MT_fw_g9WyAtrOWDPSn/exec",
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
