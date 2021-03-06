import {
  FaRegListAlt as ListIcon
} from "react-icons/fa";
import {
  MdPhone as PhoneIcon,
  MdLocationOn as LocationIcon
} from "react-icons/md";

const Footer = () => {
  const data = {}
  data.companyPages = [
    {
      title: "Our Catalog"
    },
    {
      title: "About Us"
    },
    {
      title: "Contact Us"
    },
    {
      title: "Request Quote"
    },
  ];
  data.contactDetails = [
    {
      name: "Phone:",
      detail: "(773) 281-3100"
    },
    {
      name: "Fax:",
      detail: "(773) 281-3131"
    },
  ];
  data.emailDetails = [
    {
      name: "Email:",
      detail: "Info@BlueJayFasteners.com"
    },
  ];
  data.addressDetails = [
    {
      line: "1770 W. Berteau Avenue Unit 402",
      city: "Chicago, IL 60613",
    },
  ];
  data.paymentCards = [
    {
      img: "/img/AmericanExpress.svg",
    },
    {
      img: "/img/MasterCard.svg",
    },
    {
      img: "/img/Paypal.svg",
    },
    {
      img: "/img/Visa.svg",
    },
  ];
  return (
    <div className="bg-dark" >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between font-ubuntu text-white px-4 md:px-0 py-6 pt-8 sm:pt-12">
          <div className="order-1 w-1/2 md:w-auto">
            <ListIcon className="sm:text-3xl text-xl" />
            <span className="sm:text-xl text-base font-medium flex py-6">Company</span>
            <div>
              {data.companyPages.map((page, index) => {
                return (
                  <div key={index} className="sm:text-base text-xs font-light pb-2 md:pb-1">
                    {page.title}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="order-3 md:order-2 md:w-auto w-full py-5 md:py-0">
            <PhoneIcon className="sm:text-3xl text-xl m-auto md:m-0" />
            <span className="sm:text-xl text-base font-medium justify-center flex md:block py-6">Contact Us</span>
            <div>
              <div>
                {data.contactDetails.map((contact, index) => {
                  return (
                    <div key={index} className="flex justify-between pb-2 text-xs font-light sm:text-base md:w-48 md:pb-1">
                      <div className="font-normal">
                        {contact.name}
                      </div>
                      <div className="font-medium">
                        {contact.detail}
                      </div>
                    </div>
                  )
                })}
              </div>
              <hr className="my-3 opacity-05 hidden md:block" />
              <div>
                {data.emailDetails.map((email, index) => {
                  return (
                    <div key={index} className="text-xs font-light flex justify-between sm:text-base">
                      <div className="font-normal">
                        {email.name}
                      </div>
                      <div className="pl-10 font-medium">
                        {email.detail}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="order-2 w-1/2 md:order-3 md:w-auto">
            <LocationIcon className=" text-xl sm:text-3xl" />
            <span className="text-base font-medium flex py-6 sm:text-xl">Visit Us</span>
            {data.addressDetails.map((address, index) => {
              return (
                <div key={index} className="text-xs font-light w-48  table-cell md:font-normal md:text-base">
                  {address.line}
                  <br />
                  {address.city}
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <hr className="text-white opacity-05" />
          <div className="sm:text-center md:flex md:justify-between">
            <div className="font-medium font-ubuntu text-white text-sm text-center m-auto pt-8 pb-4 md:pb-8 sm:inline-grid md:text-base w-2/3 md:w-full md:inline-flex">
              © 2020 Blue-Jay Fasteners, Ltd.
              &nbsp;
              <span className="font-light">All rights reserved.</span>
            </div>
            <div className="flex justify-center pb-10 md:pb-0 ">
              {data.paymentCards.map((payment, index) => {
                const { img } = payment || {}
                return (
                  <img key={index} src={img} className="bg-white rounded-md self-center h-6 py-1 px-1 md:mx-2 mx-1 w-8 md:w-12" alt="payment options" />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;