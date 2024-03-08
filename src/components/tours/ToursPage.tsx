"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchTerm],
    queryFn: () => getAllTours(searchTerm),
  });

  return (
    <>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="insira uma cidade ou país aqui..."
            className="input input-bordered join-item w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearchTerm("")}
          >
            {isPending ? "aguarde..." : "resetar"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
}
