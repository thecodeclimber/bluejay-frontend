import BoltSpecification from "./boltSpecification";
import ImageGallery from "./imageGallery";
import ProductInfo from "./productInfo";
import ThreadSize from "./threadSize";
import Grade from "./grade";
import Quantity from "./quantity";
import VideoGallery from "./videoGallery";

const index = () => {
  return (
    <div>
      <div className="container mx-auto flex">
        <div className="flex-col">
          <ImageGallery />
          <hr className="text-dark opacity-10 my-10 mr-8" />
          <VideoGallery />
        </div>
        <div className="w-full border-l border-dark border-opacity-10 mb-16 pl-8">
          <BoltSpecification />
          <div className="flex">
            <div className="">
              <ProductInfo />
              <ThreadSize />
              <Grade />
            </div>
            <div>
              <Quantity />
            </div>
          </div>
          <hr className="text-dark opacity-10 py-3" />
        </div>
      </div>
    </div>
  );
};

export default index;
