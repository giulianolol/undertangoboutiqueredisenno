import { NextResponse } from "next/server";

export async function GET() {
  // Mock: generar valor ficticio y variación
  const base = 0.04567;
  const randomFactor = (Math.random() - 0.5) * 0.002; // pequeña fluctuación
  const price = +(base + randomFactor).toFixed(6);
  const change24h = +((Math.random() - 0.5) * 4).toFixed(2);

  return NextResponse.json({ price, change24h });
}
