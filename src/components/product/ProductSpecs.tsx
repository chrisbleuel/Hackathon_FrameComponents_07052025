import React, { useState } from 'react';

const tabs = ['Specification', 'Description', 'Details'];

export const ProductSpecs = () => {
  const [activeTab, setActiveTab] = useState('Specification');

  return (
    <div className="flex flex-col gap-4">
      <div className="flex min-h-[38px] w-full text-base text-[#606A76] font-bold whitespace-nowrap tracking-[0.08px] flex-wrap">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="flex flex-col"
            onClick={() => setActiveTab(tab)}
          >
            <button
              className={`px-4 ${
                activeTab === tab ? 'text-[#32373E]' : 'text-[#606A76]'
              }`}
            >
              {tab}
            </button>
            <div
              className={`flex min-h-0.5 w-full ${
                activeTab === tab ? 'bg-[#0E0F11]' : 'bg-[#C2CDD6]'
              } mt-3`}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {activeTab === 'Specification' && (
          <div className="flex flex-col gap-4">
            <div className="items-center flex w-full gap-12 flex-wrap">
              <div className="self-stretch flex-1 shrink basis-[0%] max-w-[200px] my-auto">
                <div className="flex flex-col relative aspect-[3.125] w-[200px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/88977c17f165288c68b3c9ff094a86d7affa5495?placeholderIfAbsent=true"
                    alt="Frame width specification"
                    className="absolute h-full w-full object-cover inset-0"
                  />
                </div>
                <div className="flex w-full gap-1 text-xs text-black font-normal text-center tracking-[0.06px] mt-[19px]">
                  <div className="flex flex-col items-stretch flex-1">
                    <div className="flex min-h-1 w-full bg-[#3396FF]" />
                    <div className="self-center mt-1">53 mm</div>
                  </div>
                  <div className="flex flex-col items-stretch w-[23px]">
                    <div className="flex min-h-1 w-full bg-[#3396FF]" />
                    <div className="self-center mt-1">18 mm</div>
                  </div>
                </div>
              </div>

              <div className="self-stretch flex-1 shrink basis-[0%] max-w-[200px] my-auto">
                <div className="flex flex-col relative aspect-[3.125] w-[200px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/cebab1bd33745ed45395dd55e5ae982cd94ec466?placeholderIfAbsent=true"
                    alt="Frame length specification"
                    className="absolute h-full w-full object-cover inset-0"
                  />
                </div>
                <div className="flex w-full flex-col items-stretch text-xs text-black font-normal text-center tracking-[0.06px] mt-[21px]">
                  <div className="flex min-h-1 w-full bg-[#3396FF]" />
                  <div className="self-center mt-1">145 mm</div>
                </div>
              </div>
            </div>

            <button className="items-center flex gap-2 text-xs text-[#0065D1] font-medium tracking-[0.5px]">
              <span>Will it fit me?</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ef1892eaf1af487e651ed8bf3b918447f0edc9ed?placeholderIfAbsent=true"
                alt="More info"
                className="aspect-[1] object-contain w-3"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
