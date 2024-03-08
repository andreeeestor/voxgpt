import { JsonValue } from "@prisma/client/runtime/library";
import Link from "next/link";

interface ToursCardProps {
  tour: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    city: string;
    country: string;
    title: string;
    description: string;
    image: string | null;
    stops: JsonValue;
  };
}
export default function ToursCard(props: ToursCardProps) {
  const { city, id, country } = props.tour;
  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact rounded-xl bg-base-100"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center">
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
}
