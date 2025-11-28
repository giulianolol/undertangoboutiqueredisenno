"use client";
import useSWR from "swr";
import Reveal from "./reveal";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function PriceTicker() {
  const { data, error } = useSWR("/api/undertangocoin/price", fetcher, { refreshInterval: 5000 });

  if (error) return <Reveal direction="up" intensity={120} parallax> <div className="text-gray-500">Error al obtener precio</div>; </Reveal>  
  if (!data) return <Reveal direction="up" intensity={120} parallax> <div className="text-gray-400">Cargando...</div>; </Reveal>

  const price = data.price;
  const change = data.change24h;

  return (
    <Reveal direction="up" intensity={120} parallax>
    <div className="inline-flex items-baseline gap-4">
      <div className="text-3xl font-bold text-utc-red">${price.toFixed(4)}</div>
      <div className={`text-sm ${change >= 0 ? "text-green-400" : "text-red-400"}`}>
        {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
      </div>
    </div>
    </Reveal>
  );
}
