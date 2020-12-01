import classnames from "classnames";

const Contact = () => {
  const data = {};
  data.contactInformation = {
    title: "Contact Information",
    subTitle: "Consultations and ordering by phones",
    phone: "(773) 281-3100",
    fax: "(773) 281-3131",
    email: "Info@BlueJayFasteners.com",
    address: "1770 W. Berteau Avenue \n Unit 402 \n Chicago, IL 60613",
  }
  data.callCenter = {
    title: "Call-center schedule",
    timing: [{
      day: "Monday - Thursday",
      time: "7:30am - 5:00pm",
    }, {
      day: "Friday",
      time: "7:30am - 5:00pm",
    }, {
      day: "Saturday - Sunday",
      time: "Closed",
    }, {
      day: "Holidays",
      time: "Closed",
    }]
  };
  return (
    <>
      <div className="container mx-auto pt-5 pb-6 text-3xl font-ubuntu text-dark">
        <span className="font-light">Get</span> <span className="font-medium">in Touch</span>
      </div>
      <hr className="mb-8 opacity-10 bg-dark" />
      <div className="container mx-auto flex mb-10">
        <div className="bg-white outline-none p-8 text-dark rounded shadow-grey-8 w-full mr-4">
          <div className="mb-6">
            <input type="text"
              value="Andrey Babak"
              name="name"
              placeholder="Name"
              className={classnames("font-ubuntu w-full text-base border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": true,
              })}
            />
          </div>
          <div className="mb-6">
            <input type="email"
              name="email"
              placeholder="E-mail"
              className={classnames("font-ubuntu w-full text-base border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": false,
              })}
            />
          </div>
          <div className="mb-6">
            <input type="text"
              name="phone"
              placeholder="Phone"
              className={classnames("font-ubuntu w-full text-base border border-dark h-12 rounded border-opacity-10 px-4 font-normal focus:outline-none", {
                "font-medium": false,
              })}
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              className={classnames("font-ubuntu w-full text-base border border-dark rounded border-opacity-10 px-4 py-2 font-normal focus:outline-none", {
                "font-medium": false,
              })}
            >
            </textarea>
          </div>
          <button
            className="font-ubuntu inline-flex py-3 text-base font-medium items-center px-10 border-r border-solid rounded bg-primary text-white border-alpha-05 focus:outline-none"
          >
            Send Message
        </button>
        </div>
        <div className="font-ubuntu bg-white outline-none py-6 px-8 text-dark rounded shadow-grey-8 min-w-500">
          <div className="font-medium mb-2 focus:outline-none text-xl">{data.contactInformation.title}</div>
          <div className="font-light text-base truncate opacity-75 focus:outline-none">{data.contactInformation.subTitle}:</div>
          <hr className="my-5 opacity-10" />
          <div className="flex text-base mb-3 focus:outline-none"><span className="opacity-75 w-24 font-light">Phone:</span><span className="font-medium">{data.contactInformation.phone}</span></div>
          <div className="flex text-base focus:outline-none"><span className="opacity-75 w-24 font-light">Fax:</span><span className="font-medium">{data.contactInformation.fax}</span></div>
          <hr className="my-5 opacity-10" />
          <div className="flex text-base focus:outline-none"><span className="opacity-75 w-24 truncate font-light">E-mail:</span><span className="font-medium">{data.contactInformation.email}</span></div>
          <hr className="my-5 opacity-10" />
          <div className="flex text-base whitespace-pre-line focus:outline-none"><span className="opacity-75 w-24 font-light">Address:</span><span className="font-medium">{data.contactInformation.address}</span></div>
          <hr className="my-5 opacity-10" />
          <div className="font-medium mb-3 focus:outline-none text-xl">{data.callCenter.title}</div>
          {data.callCenter.timing.length > 0 && data.callCenter.timing.map((callCenterTiming) => (
            <div className="flex justify-between text-base focus:outline-none py-1">
              <div className="opacity-75 font-light">{callCenterTiming.day}:</div>
              <div className="font-medium">{callCenterTiming.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default Contact;
