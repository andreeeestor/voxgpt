"use client"

import { FormEvent } from "react";

interface NewTourProps {}
export default function NewTour(props: NewTourProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
  };

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
      <div className="mt-16">{/* <TourInfo /> */}</div>
    </>
  );
}
