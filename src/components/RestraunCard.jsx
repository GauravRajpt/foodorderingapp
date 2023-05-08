import { Link } from "react-router-dom";

const RestraunCard = ({ name, cloudinaryImageId, cuisines, slaString, id }) => {
  console.log("cu" + cuisines);
  return (
    <>
      <Link
        to={`/restaurant/${id}`}
        className="w-56 border m-2 h-64 shadow-lg rounded-md"
      >
        <div>
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
          ></img>
          <h2>{name}</h2>
          {cuisines ? <h4>{cuisines.join(", ")}</h4> : null}
          <h4>{slaString}</h4>
        </div>
      </Link>
    </>
  );
};
export default RestraunCard;
