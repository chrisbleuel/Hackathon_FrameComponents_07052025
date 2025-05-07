import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="justify-center items-stretch flex w-full flex-col bg-[#F2F5F8]">
      <div className="items-center flex w-full text-base tracking-[0.08px] bg-[#F2F5F8] py-10 px-4">
        <div className="self-stretch flex min-w-60 w-full gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto max-w-[1440px] mx-auto">
          {[1, 2, 3].map((col) => (
            <div key={col} className="max-w-[600px] min-w-60 text-[#32373E] whitespace-nowrap flex-1 shrink basis-[0%] gap-8">
              <h3 className="text-[#32373E] font-bold">Headline</h3>
              <div className="w-full font-light gap-4 mt-8">
                <div className="w-full gap-4">
                  {[1, 2, 3, 4].map((link) => (
                    <Link
                      key={link}
                      to="/"
                      className="text-[#32373E] flex-1 shrink basis-[0%] w-full gap-2 block mt-4 first:mt-0 hover:text-[#0072EF] transition-colors"
                    >
                      Link
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="max-w-[600px] min-w-60 flex-1 shrink basis-[0%] gap-8">
            <h3 className="text-[#32373E] font-bold">Headline</h3>
            <div className="w-full font-light gap-4 mt-8">
              <p className="text-[#606A76] w-full leading-6 gap-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a augue augue.
              </p>
              <div className="w-full text-[#32373E] whitespace-nowrap gap-4 mt-4">
                <Link
                  to="/"
                  className="text-[#32373E] flex-1 shrink basis-[0%] w-full gap-2 hover:text-[#0072EF] transition-colors"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-between items-center flex min-h-9 w-full gap-[40px_100px] text-sm text-white tracking-[0.07px] leading-none flex-wrap bg-[#32373E] py-4 px-4">
        <div className="text-white self-stretch font-bold my-auto">
          ZEISS International
        </div>
        <div className="items-center self-stretch flex min-w-60 gap-8 font-normal whitespace-nowrap text-right my-auto">
          {[1, 2, 3, 4, 5, 6].map((link) => (
            <Link
              key={link}
              to="/"
              className="text-white self-stretch hover:text-gray-200 transition-colors"
            >
              Link
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
