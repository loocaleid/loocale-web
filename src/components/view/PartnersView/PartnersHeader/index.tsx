import Image from "next/image";
import React from "react";
import VerifiedIcon from "@icons/verified_orange_icon.svg";

const PartnersHeader = () => {
  return (
    <div className="rounded-xl shadow-md flex flex-col">
      <div className="pl-10">
        <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
      </div>
      <div className="flex gap-12 items-center">
        <div
          className="w-1/2 h-full flex items-center justify-center"
          style={{ backgroundImage: 'url("/partners_header.png")' }}
        >
          <div className="relative">
            <h1 className="font-bold text-[38px] leading-[48px]">
              Partner <br></br>Loocale
            </h1>
            <VerifiedIcon className="absolute top-0 -right-10"/>
          </div>
        </div>
        <div className="flex items-center w-[42%] justify-center">
          <p className="text-xs max-w-[350px] pb-5 pt-9">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac,
            vestibulum eu nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersHeader;
