import BoltSpecification from "./boltSpecification";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import ThreadSize from "./threadSize";
import Grade from "./grade";
import Quantity from "./quantity";
import ProductVideos from "./productVideos";
import TechnicalSpecs from "./technicalSpecs";
import Material from "./material";

const Specification = () => {
  return (
    <div>
      <div className="container mx-auto flex">
        <div className="flex-col">
          <ProductImages />
          <hr className="text-dark opacity-10 mb-10 mr-8" />
          <ProductVideos />
        </div>
        <div className="w-full border-l border-dark border-opacity-10 mb-16 pl-10">
          <BoltSpecification />
          <div className="flex">
            <div>
              <ProductInfo />
              <ThreadSize />
              <Grade />
              <Material />
            </div>
            <div>
              <Quantity />
            </div>
          </div>
          <hr className="text-dark opacity-10 py-3" />
          <TechnicalSpecs />
        </div>
      </div>
    </div>
  );
};

export default Specification;
