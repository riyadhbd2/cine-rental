import Star from "../assets/star.svg";

const Rating = ({ value }) => {
  const starts = Array(value).fill(Star);
  return (
    <div className="flex space-x-1">
      {starts.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </div>
  );
};

export default Rating;
