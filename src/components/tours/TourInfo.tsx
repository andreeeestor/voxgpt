import { JsonValue } from "@prisma/client/runtime/library";

interface TourInfoProps {
  tour:
    | {
        city: string;
        country: string;
        title: string;
        description: string;
        stops: string[];
      }
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
      };
}
export default function TourInfo(props: TourInfoProps) {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4">{props.tour.title}</h1>
      <p className="leading-loose mb-6">{props.tour.description}</p>
      <ul>
        {(props.tour.stops as string[]).map((stop, index) => (
          <li key={index} className="mb-4 bg-base-100 p-4 rounded-xl">
            <p>{stop}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
