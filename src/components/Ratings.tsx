import { Star } from "lucide-react";
type IRating = {
  value: number;
};
const Rating = ({ value }: IRating) => {
  console.log(value);
  const starts = Array(value).fill(
    <Star width={"14"} height={"14"} className="text-primary" fill="#ff9900" />
  );
  console.log(starts);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {starts.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
