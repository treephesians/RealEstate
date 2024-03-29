import { useMemo } from "react";

const InfoCard = ({ listingImageId, homeActionImageUrl, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="w-[78px] relative h-[78px] overflow-hidden shrink-0"
          alt=""
          src={listingImageId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">
            {homeActionImageUrl}
          </div>
          <div className="w-[268px] relative text-base leading-[24px] text-lightslategray text-left flex items-end">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
