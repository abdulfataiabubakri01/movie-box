import { Link } from "react-router";
import { getImageLink } from "../utils";

export const SeriesDetailsCardData = [
  {
    id: "details",
    img: "/Our_Fault_poster.jpg",
    bgImg: "/Our_Fault_poster.jpg",
    date: "October 24,2025",
    header: "Our Fault",
    summary:
      "This film was created to teach people different lessons, you won't regret watching this film cause of all the lesson that is there",
    genreType: "Action Sci-Fi",
  },
];

const SeriesDetailsCard = ({
  id,
  img,
  bgImg,
  date,
  header,
  summary,
  genreType,
}) => {
  return (
    <Link to={`/seriesDetails/${id}`}>
      <div
        className=" bg-cover w-screen p-10 bg-center bg-no-repeat md:h-[520px] pl-5 pt-5"
        style={{
          backgroundImage: `url(${getImageLink(bgImg)})`,
        }}
      >
        <Link
          to="/tvseries"
          className="cursor-pointer border-2 rounded-xl pl-1 pr-1 hover hover:bg-gray-400"
        >
          Go Back
        </Link>
        <div className="flex text-amber-50 max-w-1/2 md:max-w-2/3">
          <img className="h-70 pt-20" src={getImageLink(img)} alt="card image" />
          <div className="pl-6 md:p">
            <h1 className="text-5xl pb-3 pt-15 font-semibold">{header}</h1>
            <p className="text-2xl pl-4 font-semibold">{date}</p>
            <p className="pl-4 pt-2 text-2xl ">Overview</p>
            <p className="pl-4 pt-1">{summary}</p>
            <p className="pt-5 pl-4 text-3xl">Genre</p>
            <div className="space-x-3 pl-4 pt-2">{genreType?.map((genre, index) => (
                                        <span
                                            className="border rounded-2xl text-sm  px-3 py-1 border-neutral-300"
                                            key={index}
                                        >
                                            {genre.name}
                                        </span>
                                        ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SeriesDetailsCard;
