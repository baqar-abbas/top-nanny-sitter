import mainhome from "/photos/homeimage.svg";
import star from "/photos/star.svg";

const MainHome = () => {
  return (
    // <section className="flex">
    //   <div>
    //     <img src={mainhome} alt="mainhome" />
    //   </div>
    //   <div>
    //     <h1>This is main Home section</h1>
    //   </div>
    // </section>
    <section className="flex flex-col md:flex-row justify-between items-center mt-5 md:mt-20">
      <div className="w-full md:w-1/2 md:ml-5 flex justify-center md:justify-start">
        <img src={star} alt="star" className="custom-star-position z-10" />
        <img
          src={mainhome}
          alt="mainhome"
          //   className="w-full md:w-auto mx-auto md:mx-0"
          className="w-[620px] h-[808px] rounded-[40px] mx-auto md:mx-0"
        />
      </div>
      {/* <div className="md:mr-5 w-full md:w-1/2 flex justify-center md:justify-start mt-5 md:mt-0">
        <h1 className="text-center md:text-left"> */}
      {/* <div className="md:mr-5 w-full md:w-1/2 flex justify-center md:justify-start mt-5 md:mt-0">
        <h1 className="text-center md:text-left">
          What over 1,500,000 families and nannies love about Top Nanny Sitter
        </h1>
      </div> */}
      {/* <div className="md:mr-5 w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
        <h2 className="text-center md:text-left">
          What over 1,500,000 families and nannies love about Top Nanny Sitter
        </h2>
      </div> */}
      <div className="md:mr-5 w-full md:w-1/2 flex flex-col justify-center mt-5 md:mt-0">
        <div className="md:ml-5">
          <h2 className="font-creato font-400 text-50px text-custom-black leading-65px text-center md:text-left">
            What over 1,500,000{" "}
            <span className="text-50px leading-65px font-900 text-custom-orange">
              Families And Nannies
            </span>{" "}
            love about Top Nanny Sitter
          </h2>
        </div>
        <div className="ml-10 w-[600px] h-[160.65px] rounded-[40px] opacity-30 bg-custom-yellow mt-5 mx-auto md:mx-0 flex justify-center">
          <div className="flex flex-col">
            <h2 className="my-5 text-center">Explore at your own pace</h2>
            <p>
              Whether you need a nanny now or later, you’re free to browse at
              your convenience.
            </p>
          </div>
        </div>
        <div className="w-[616px] h-[160.65px] rounded-[40px] opacity-30 bg-custom-purple mt-5 mx-auto md:mx-0">
          <div className="flex flex-col">
            <h2 className="my-5 text-center">Explore at your own pace</h2>
            <p>
              Whether you need a nanny now or later, you’re free to browse at
              your convenience.
            </p>
          </div>
        </div>
        <div className="w-[616px] h-[160.65px] rounded-[40px] opacity-30 bg-custom-blue mt-5 mx-auto md:mx-0">
          <div className="flex flex-col">
            <h2 className="my-5 text-center">Explore at your own pace</h2>
            <p>
              Whether you need a nanny now or later, you’re free to browse at
              your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHome;
