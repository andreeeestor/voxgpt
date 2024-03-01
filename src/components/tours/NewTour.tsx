"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getExistingTours,
  generateTourResponse,
  createNewTour,
} from "@/utils/action";
import { FormEvent } from "react";
import { toast } from "sonner";
import TourInfo from "./TourInfo";

export default function NewTour() {
  const {mutate, isPending, data: tour} = useMutation({
    mutationFn: async (destination: any) => {
      const newTour = await generateTourResponse(destination);
      if (newTour) {
        return newTour;
      }
      toast.error("Nenhuma cidade foi achada...");
      return null;
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if(isPending){
    return <span className="loading loading-lg">Carregando...</span>
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Selecione o seu destino dos sonhos!</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="cidade"
            name="city"
            required
          />

          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="país"
            name="country"
            required
          />
          <button className="btn btn-primary join-item" type="submit">
            Gerar Tour
          </button>
        </div>
      </form>
      <div className="mt-16">
        {tour && <TourInfo tour={tour} />} 
        </div>
    </>
  );
}
