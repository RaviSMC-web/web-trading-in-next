import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    data: { client_id, password },
    platform,
  } = req.body;
  const API_ENDPOINT = "https://uatopenapi.stoxkart.com/auth/login";

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "X-Platform": "web",
      },
      body: JSON.stringify({ data: { client_id, password }, platform }),
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error submitting contact form" });
  }
}
