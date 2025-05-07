import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex w-full flex-col items-stretch justify-center">
        <div className="justify-center items-center flex min-h-6 w-full gap-20 overflow-hidden text-base text-white tracking-[0.08px] bg-[#32373E] pt-0 pb-0">
          <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center gap-[40px_80px] flex-wrap flex-1 shrink basis-[0%] my-auto">
            <div className="text-white font-bold self-stretch flex-1 shrink basis-[0%] my-auto">
              Website Name
            </div>
            <div className="self-stretch flex min-w-60 gap-6 font-normal text-right my-auto">
              <div className="items-center flex gap-2">
                <div className="text-white self-stretch gap-2 my-auto">
                  Secondary Utility
                </div>
              </div>
              <div className="items-center flex gap-2">
                <div className="text-white self-stretch gap-2 my-auto">
                  Secondary Utility
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="justify-center items-center flex min-h-24 w-full bg-white">
          <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center flex-wrap flex-1 shrink basis-[0%] my-auto px-4">
            <div className="justify-center items-center self-stretch flex w-12 my-auto py-6">
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d3594334ba36efbe4d3ab0c6a39582426c65d943?placeholderIfAbsent=true" className="aspect-[1] object-contain w-12 self-stretch my-auto" alt="Logo" />
            </div>
            
            <div className="items-center self-stretch flex min-w-60 gap-8 text-xl text-[#32373E] font-normal tracking-[0.1px] leading-[1.4] flex-wrap my-auto">
              <Link to="/" className="text-[#32373E] hover:text-[#0072EF] transition-colors">
                Browse shop
              </Link>
              <Link to="/partners" className="text-[#32373E] hover:text-[#0072EF] transition-colors">
                Authorized ZEISS retail partners
              </Link>
              <Link to="/premium" className="text-[#32373E] hover:text-[#0072EF] transition-colors">
                ZEISS premium lenses
              </Link>
              <Link to="/help" className="text-[#32373E] hover:text-[#0072EF] transition-colors">
                Help & contact
              </Link>
              <button className="items-center self-stretch flex gap-2 hover:text-[#0072EF] transition-colors">
                <span className="text-[#32373E]">More</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/020e82ea093865f041198327a3495883122ec10a?placeholderIfAbsent=true" className="aspect-[1] object-contain w-3 self-stretch shrink-0" alt="Expand" />
              </button>
            </div>
            
            <div className="items-center self-stretch flex h-7 gap-8 flex-1 shrink basis-24 my-auto justify-end">
              <button className="items-center self-stretch flex gap-2 w-5">
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/cdbd1c77c116aef56b1db1b0194d7dac19d8b28a?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" alt="Search" />
              </button>
              <button className="items-center self-stretch flex gap-2 w-5">
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/81be4c2c7529580852563479f0f6ef3bb57329d1?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" alt="Cart" />
              </button>
              <button>
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/3c2bce0faf92cdda8d3a26855d4faa71def191fb?placeholderIfAbsent=true" className="aspect-[1] object-contain w-10" alt="Account" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
