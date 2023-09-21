import React from "react";

const onBoardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <h1 className="text-[#4ABF67] text-[28px] font-bold pt-[2%] pl-[4%]">
        ATLAN SQL-APP
      </h1>
      <div className=" w-full flex items-center justify-center mt-[2%]">
        <div className="min-h-[548px] w-[500px] p-[52px] bg-[#0A0A0A] rounded-xl border-[#414141] border">
          {children}
        </div>
      </div>
    </div>
  );
};

export default onBoardingLayout;
