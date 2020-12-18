import { RiSubtractFill as SubtractIcon } from "react-icons/ri/index";
import { BsPlus as PlusIcon } from "react-icons/bs/index";
import BoxSize from "./boxSize";
import Price from "./price";

const Quantity = () => {
  return (
    <div className="flex flex-col border-l border-dark border-opacity-10 pl-8 h-full">
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-8 pb-5 ">
        Quantity
      </div>
      <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10">
        <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center py-4 px-4">
          <SubtractIcon className="text-black" />
        </div>
        <div className="px-8 text-dark tracking-tight ">01</div>
        <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center py-4  px-4">
          <PlusIcon className="text-black" />
        </div>
      </div>
      <BoxSize />
      <Price />
    </div>
  );
};

export default Quantity;
