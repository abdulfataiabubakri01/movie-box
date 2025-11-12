import { Link } from "react-router";
import { getImageLink } from "../utils"

export const SeriesCardData = [
  {
    id: 1,
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    id: 2,
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    seriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    SeriesName: "Our fault",
    date: "Oct 15, 2025",
  },
];

const SeriesCard = ({ id, img, SeriesName, date }) => {
  return (
    <Link to={`/tvseries/${id}`}>
      <div className="bg-gray-200 h-10/11 w-80 md:w-60 md:h-99/100 rounded-2xl group overflow-hidden border border-neutral-300 hover:shadow-2xl dark:bg-slate-900 dark:border-slate-700">
        <img className="h-3/4 w-full" src={getImageLink(img)} />
        <button className="max-w-lg lg:text-xl text: left-0 cursor-pointer hover:underline decoration-2 hover:text-green-700  pl-5 pt-5 md:pt-1 text-2xl md:text-2xl font-bold">
          {SeriesName}
        </button>
        <p className="pl-7 text-sm md:pb-1 pt-0.5 text-gray-900">
          {new Date(date).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
        </p>
      </div>
    </Link>
  );
};
export default SeriesCard