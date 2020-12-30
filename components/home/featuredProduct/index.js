import ProductSlider from "../../elements/productSlider";

const FeaturedProduct = () => {
  return (
    <div className="container mx-auto pb-6 tracking-tight">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Featured <span className="font-medium">Product</span>
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

export default FeaturedProduct;
