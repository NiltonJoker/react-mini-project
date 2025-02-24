import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const stockData = [
    { date: "2025-02-01", close: 189.25 },
    { date: "2025-01-01", close: 182.30 },
    { date: "2024-12-01", close: 179.45 },
    { date: "2024-11-01", close: 171.80 },
    { date: "2024-10-01", close: 165.42 },
    { date: "2024-09-01", close: 160.15 },
    { date: "2024-08-01", close: 158.90 },
    { date: "2024-07-01", close: 154.20 },
    { date: "2024-06-01", close: 150.65 },
    { date: "2024-05-01", close: 145.40 },
    { date: "2024-04-01", close: 140.75 },
    { date: "2024-03-01", close: 135.20 },
  ];

  res.status(200).json(stockData);
}