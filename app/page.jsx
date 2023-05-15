import {
  About,
  AtmBooth,
  Banks,
  CarouselImage,
  Download,
  Features,
} from "./components";

const HomePage = () => {
  return (
    <div className=" w-full overflow-hidden ">
      <CarouselImage />
      <Features />
      <About />
      <Banks />
      <AtmBooth />
      <Download />
    </div>
  );
};

export default HomePage;
