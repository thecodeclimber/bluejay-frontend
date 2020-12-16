const OurStory = () => {
  const data = {
    description:
      "We understand the importance and need for fast turnaround times and make this a high priority when working with your project schedules. Our commitment is to give you a quality product at competitive prices with fast and dependable service.",
  };

  return (
    <div className="pt-4 pb-24">
      <div className="container mx-auto text-3xl py-10 font-ubuntu text-dark text-center">
        <span className="font-light">Our</span>{" "}
        <span className="font-medium">Story</span>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-ubuntu text-dark mb-10">
              <span className="font-light">How</span>{" "}
              <span className="font-medium">it All Began</span>
            </div>
            <div className="font-light max-w-700 text-xl leading-9">
              {data.description}
            </div>
          </div>
          <div>
            <img src="img/story.png" alt="story" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
