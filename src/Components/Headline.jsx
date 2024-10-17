import headline from "/photos/headline.svg";
import three from "/photos/three.svg";

const Headline = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 ml-5 md:ml-5 flex flex-col">
        <div className="flex justify-end max-md:justify-center w-full md:w-[93%]">
          <img
            src={three}
            alt="three"
            className="w-full md:w-auto max-md:h-[25px] max-md:w-[25px]"
          />
        </div>
        <div>
          <h1 className="font-creato font-400 text-3xl md:text-55px leading-tight md:leading-65px">
            Reliable{" "}
            <span className="font-900 text-custom-orange">Babysitting</span>{" "}
            Services You Can Trust
          </h1>
        </div>
        <div className="my-5 w-full md:w-[90%]">
          <p className="font-montserrat font-400 text-base md:text-18px leading-normal md:leading-28px text-custom-black">
            Voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia.
          </p>
        </div>
        <div className="my-5">
          <p className="font-montserrat font-700 text-base md:text-18px leading-normal md:leading-28px text-semi-transparent-black">
            How often do you need a nanny?
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-custom-orange text-white w-[132px] h-[47px] rounded-[25px] hover:bg-opacity-80">
            Part-Time
          </button>
          <button className="w-[126px] h-[47px] rounded-[25px] border border-[#666666] text-[#333333] opacity-30 hover:opacity-100 hover:bg-gray-200">
            Full-Time
          </button>
          <button className="w-[126px] h-[47px] rounded-[25px] border border-[#666666] text-[#333333] opacity-30 hover:opacity-100 hover:bg-gray-200">
            Not Sure
          </button>
        </div>
      </div>
      {/* <div className="w-full md:w-1/2 mt-5 md:mt-0 mr-5">
        <img src={headline} alt="headline image" className="w-full md:w-auto" />
      </div> */}
      <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end mr-5 max-md:!w-[95%] max-md:mx-auto max-md:!items-center">
        <img
          src={headline}
          alt="headline image"
          className="w-full md:w-auto mx-auto md:mx-0 max-md:w-[95%] max-md:!mx-auto"
        />
      </div>
    </section>
  );
};

export default Headline;
