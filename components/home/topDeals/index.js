import ProductSlider from "../../elements/productSlider";

const TopDeals = () => {
  return (
    <div className="container mx-auto pb-6 tracking-tight">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Top <span className="font-medium">Deals</span>
        </div>
        <div className="h-full absolute flex justify-between right-0 top-0 items-center">
          <div className="right-0 mr-4 text-normal text-primary text-lg cursor-pointer">
            Show All (137)
          </div>
        </div>
      </div>
      <ProductSlider sliderDots />
    </div>
  );
};

export default TopDeals;
