const About = () => {
  const data = {
    title: "High Quality Fasteners & Service \n with a Personal Touch",
    years: "40+",
    yearsTitle: "Years & Running",
  };
  return (
    <>
      <div className="container mx-auto pt-5 pb-8 text-3xl font-ubuntu text-dark text-center">
        <span className="font-light">About</span> <span className="font-medium">Us</span>
      </div>
      <div className="flex mb-5">
        <div className="flex items-center w-full max-h-450 overflow-hidden relative">
          <img src="img/about-banner.svg" className="w-full" />
          <div className="absolute font-ubuntu text-white text-4xl font-medium whitespace-pre-line pl-16">{data.title}</div>
        </div>
        <div className="flex items-center relative -left-55">
          <div className="bg-about-card bg-no-repeat flex items-center justify-center rounded overflow-hidden p-6">
            <div className="border border-white border-opacity-10 rounded px-6 py-2">
              <img src="img/about-card.svg" className="opacity-0" />
            </div>
            <div className="absolute font-ubuntu text-white text-center">
              <div className="text-4xl font-medium">{data.years}</div>
              <div className="text-2xl font-light">{data.yearsTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
