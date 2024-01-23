const Contact = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch h-9 relative leading-[36px] inline-block">
              Enquiry Form
            </b>
            <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="First name"
                type="text"
                maxlength="100"
                minlength="2"
                required
              />
              <input
                className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="Last name"
                type="text"
                maxlength="100"
                minlength="2"
                required
              />
            </div>
            <input
              className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1"
              placeholder="Email id"
              type="text"
              maxlength="100"
              minlength="2"
              required
            />
            <textarea
              className="bg-[transparent] h-[105px] w-auto font-roboto text-base [outline:none] self-stretch rounded box-border flex flex-col items-start justify-start p-3 text-darkgray border-[1px] border-solid border-gray1"
              placeholder="Comments or questions"
              rows={10}
              required={true}
              cols={10}
            />
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-royalblue lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
              <div className="w-[203.1px] relative text-base font-roboto text-gray-white text-center inline-block">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
