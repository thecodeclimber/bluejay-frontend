const Price = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-5 pb-2">
        Price
      </div>
      <div className="font-medium text-dark text-2xl tracking-tight pb-2">
        $249.99
      </div>
      <div className="flex items-center justify-center cursor-pointer text-white bg-primary rounded py-3">
        <div className="mr-4">
          <img
            src="/img/cart-icon.svg"
            width="23"
            height="23"
            alt="cart-image"
          />
        </div>
        <span className="font-normal font-base">Add to Cart</span>
      </div>
    </div>
  );
};

export default Price;
