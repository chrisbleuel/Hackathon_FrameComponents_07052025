
import React from 'react';
import { Card } from '@/components/ui/card';

interface Benefit {
  icon: string;
  title: string;
  link?: {
    text: string;
    url: string;
  };
}

interface ProductBenefitsProps {
  benefits: Benefit[];
}

export const ProductBenefits: React.FC<ProductBenefitsProps> = ({ benefits }) => {
  return (
    <div className="content-start flex-wrap flex w-full gap-4 px-16">
      {benefits.map((benefit, index) => (
        <Card
          key={index}
          className="max-w-[864px] items-center border border-[color:var(--Global-Border-subtle,#C2CDD6)] flex min-w-60 gap-4 grow shrink w-[298px] p-6 rounded-lg border-solid"
        >
          <img
            src={benefit.icon}
            alt={benefit.title}
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center gap-4 my-auto">
            <div className="self-stretch flex flex-col">
              <div className="text-[#32373E] text-base font-medium tracking-[0.08px]">
                {benefit.title}
              </div>
              {benefit.link && (
                <div className="items-center flex gap-2 text-sm text-[#0065D1] tracking-[0.5px] leading-none mt-1">
                  <a
                    href={benefit.link.url}
                    className="text-[#0065D1] hover:text-[#0072EF] transition-colors"
                  >
                    {benefit.link.text}
                  </a>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e2c38513255f5a26cce7c6c39e6bb74c03b863c8?placeholderIfAbsent=true"
                    alt="Arrow"
                    className="aspect-[1] object-contain w-4"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
