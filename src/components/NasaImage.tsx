import { useMemo } from "react";
import type { ApodData } from "../App";
import Spinner from "./Spinner";

interface NasaImageProps {
  apod: ApodData;
  loading: boolean;
}

const NasaImage = ({ apod, loading }: NasaImageProps) => {
  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage: `url("${apod.url}")`,
    }),
    [apod]
  );

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-center">
        <h3> {apod.title}</h3>
        <div
          className="flex items-center justify-center bg-cover bg-center bg-gray-100 h-72 rounded-lg overflow-hidden"
          style={backgroundImageStyle}
        >
          {loading ? <Spinner /> : ""}
        </div>
      </div>
      <p>{apod.explanation}</p>
    </div>
  );
};

export default NasaImage;
