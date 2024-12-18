import { useEffect, useState } from "react";
import ICar from "../../interface/ICar";
import { useParams } from "react-router-dom";
import carData from "../../../data.json";
const Details = () => {
  const [singleCar, setSingleCar] = useState<null | ICar>(null);
  const { carId } = useParams();

  useEffect(() => {
    if (carId && carData) {
      const findCarById = carData.find(
        (singleCar) => Number(singleCar.id) === Number(carId)
      );
      setSingleCar(findCarById || null);
    }
  }, [carId]);

  if (!singleCar) return <p>Loading...</p>;
  return (
    <section className="stn-detail">
      <h1>{singleCar.carModel}</h1>
      <h2>{singleCar.CarMake}</h2>
      <h3>{singleCar.CarYear}</h3>
    </section>
  );
};

export default Details;
