import TourInfo from "@/components/tours/TourInfo";
import { getSingleTour } from "@/utils/action";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SingleTourPage({ params }: { params: any }) {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect("/tours");
  }

  return (
    <>
      <Link href={`/tours`} className="btn btn-primary mb-12">
        Voltar
      </Link>
      <TourInfo tour={tour} />
    </>
  );
}
