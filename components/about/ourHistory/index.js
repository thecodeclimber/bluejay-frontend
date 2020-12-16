const OurHistory = () => {
  const data = {
    title:
      "Thrive Themes was founded in early 2013 by the ideal match: marketing expert Shane Melaugh\nand tech fanatic Paul McCarthy. But their journeys before they met weren't always ideal.",
    dataLeft: {
      image: "img/history-user.png",
      name: "Andrey Babak",
      data: [
        {
          description:
            "Everything Shane knows about marketing comes from the many years of creating his own businesses.",
        },
        {
          description:
            "He attempted and failed several times, but each time he failed, he tried to do it better the next time.",
        },
        {
          description:
            "As he started figuring out the psychology behind selling, marketing became his true passion.",
        },
        {
          description:
            "Shane is hungry to improve everything that falls into his hands. Every day, he tries to be better than the day before - and he applies the same principle to his business.",
        },
        {
          description:
            "He was already extremely driven and eager to have a successful online business. His head was full of product ideas. ",
        },
        {
          description:
            "However, he didn't have the technical background to make it happen.",
        },
      ],
    },
    dataRigth: {
      image: "img/history-user.png",
      name: "Andrey Babak",
      data: [
        {
          description:
            "Everything Shane knows about marketing comes from the many years of creating his own businesses.",
        },
        {
          description:
            "He attempted and failed several times, but each time he failed, he tried to do it better the next time.",
        },
        {
          description:
            "As he started figuring out the psychology behind selling, marketing became his true passion.",
        },
        {
          description:
            "Shane is hungry to improve everything that falls into his hands. Every day, he tries to be better than the day before - and he applies the same principle to his business.",
        },
        {
          description:
            "He was already extremely driven and eager to have a successful online business. His head was full of product ideas. ",
        },
        {
          description:
            "However, he didn't have the technical background to make it happen.",
        },
      ],
    },
  };

  return (
    <div className="pb-18 font-ubuntu">
      <div className="container mx-auto text-3xl pb-10 text-dark text-center">
        <span className="font-light">Our</span>{" "}
        <span className="font-medium">History</span>
      </div>
      <div className="container mx-auto font-light opacity-75 whitespace-pre-line text-center leading-7 mb-8">
        {data.title}
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-full pr-10">
            <div className="flex justify-center">
              <img src={data.dataLeft.image} alt="history-user" width="150px" />
            </div>
            <div className="bg-white rounded shadow-grey-8 pt-24 -top-70 -z-1 pb-6 relative">
              <div className="container mx-auto text-2xl pb-10 text-dark text-center font-medium">
                {data.dataLeft.name}
              </div>
              <div>
                {data.dataLeft.data.length > 0 &&
                  data.dataLeft.data.map((userData, index) => (
                    <div
                      className="font-light text-base px-20 text-center mb-6 leading-6"
                      key={index}
                    >
                      {userData.description}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full pl-10">
            <div className="flex justify-center">
              <img
                src="img/history-user.png"
                alt="history-user"
                width="150px"
              />
            </div>
            <div className="bg-white rounded shadow-grey-8 pt-24 -top-70 -z-1 pb-6 relative">
              <div className="container mx-auto text-2xl pb-10 text-dark text-center font-medium">
                {data.dataRigth.name}
              </div>
              <div>
                {data.dataRigth.data.length > 0 &&
                  data.dataRigth.data.map((userData, index) => (
                    <div
                      className="font-light text-base px-20 text-center mb-6 leading-6"
                      key={index}
                    >
                      {userData.description}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
