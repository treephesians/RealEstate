import { useMemo } from "react";

const PropertyCard = ({
  propertyImage,
  ellipse1,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const card1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className="h-[467px] w-[350px] rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] text-left text-mini-5 text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card1Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
            alt=""
            src={ellipse1}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
