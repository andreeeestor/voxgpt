import { JsonValue } from "@prisma/client/runtime/library";
import ToursCard from "./ToursCard";

interface ToursListProps {
  data:
    | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        title: string;
        description: string;
        image: string | null;
        stops: JsonValue;
      }[]
    | undefined;
}
export default function ToursList(props: ToursListProps) {
  if (props.data?.length === 0) {
    return <h4 className="text-lg">Nenhum passeio encontrado</h4>;
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {props.data?.map((tour) => {
        return <ToursCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
}
