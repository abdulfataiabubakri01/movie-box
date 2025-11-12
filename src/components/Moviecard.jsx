import { Link } from "react-router";
import { getImageLink } from "../utils";

export const Moviecarddata = [
  {
    id: 1,
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    id: 2,
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
  {
    img: "/Our_Fault_poster.jpg",
    MovieName: "Our fault",
    Date: "Oct 15, 2025",
  },
];

const Moviecard = ({ id, img, MovieName, date }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="bg-gray-200 h-10/11 w-80 md:w-60 md:h-99/100 rounded-2xl group overflow-hidden border border-neutral-300 hover:shadow-2xl dark:bg-slate-900 dark:border-slate-700">
        <img className="h-3/4 w-full" src={getImageLink(img)} />
        <button className="max-w-lg lg:text-xl cursor-pointer hover:underline decoration-2 hover:text-green-700  pl-5 pt-5 md:pt-3 text-xl md:text-2xl font-bold">
          {MovieName}
        </button>
        <p className="pl-7 text-sm md:pb-1 pt-0.5 text-gray-900">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default Moviecard;
