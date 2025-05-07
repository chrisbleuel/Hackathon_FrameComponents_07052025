import React, { useState } from 'react';
const tabs = ['Specification', 'Description', 'Details'];
export const ProductSpecs = () => {
  const [activeTab, setActiveTab] = useState('Specification');
  return <div className="flex flex-col gap-4">
      <div className="flex min-h-[38px] w-full text-base text-[#606A76] font-bold whitespace-nowrap tracking-[0.08px] flex-wrap">
        {tabs.map(tab => <div key={tab} className="flex flex-col" onClick={() => setActiveTab(tab)}>
            <button className={`px-4 ${activeTab === tab ? 'text-[#32373E]' : 'text-[#606A76]'}`}>
              {tab}
            </button>
            <div className={`flex min-h-0.5 w-full ${activeTab === tab ? 'bg-[#0E0F11]' : 'bg-[#C2CDD6]'} mt-3`} />
          </div>)}
      </div>

      <div className="flex flex-col gap-8">
        {activeTab === 'Specification'}
      </div>
    </div>;
};