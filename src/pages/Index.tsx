import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductOptions } from '@/components/product/ProductOptions';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { ProductBenefits } from '@/components/product/ProductBenefits';

const productImages = [{
  src: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/06914a8959f93f06997f705735e8b326e13a1555?placeholderIfAbsent=true',
  alt: 'Product front view'
}, {
  src: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/0c0c460bb5d451440f1ba10fb2f7e7454137ace4?placeholderIfAbsent=true',
  alt: 'Product side view'
}];

const colorOptions = [{
  id: 'black',
  name: 'Black',
  color: '#000000'
}, {
  id: 'gold',
  name: 'Gold',
  color: 'rgb(209,187,177)'
}, {
  id: 'grey',
  name: 'Grey',
  color: 'rgb(124,122,121)'
}, {
  id: 'blue',
  name: 'Blue',
  color: 'rgb(53,77,255)'
}];

const sizeOptions = [{
  id: 'small',
  label: 'S',
  dimensions: '50/17/145',
  unit: 'mm'
}];

const benefits = [{
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/eb59c892cc93eb1d94a1201717eb5b66fd312a41?placeholderIfAbsent=true',
  title: 'One-year warranty from our partners',
  link: {
    text: 'Warranty details',
    url: '#'
  }
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/32d256f23b9796108cc4ead14cf7f7e9ce3c9606?placeholderIfAbsent=true',
  title: 'Free shipping',
  link: {
    text: 'More about shipping',
    url: '#'
  }
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/b0b32028db87856f0e5ddf9556fed27a4dae274d?placeholderIfAbsent=true',
  title: 'Free on-site services',
  link: {
    text: 'Explore local partners',
    url: '#'
  }
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d76ec412e4ab035517e137014000edccd733c587?placeholderIfAbsent=true',
  title: 'Free returns',
  link: {
    text: 'See return policy',
    url: '#'
  }
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/c31ec871f2e098fc0d421f886bb092919b7378d1?placeholderIfAbsent=true',
  title: 'Free case and cleaning cloth'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9e006b2c05c5b4157adee9eb5e1e4cee308882b2?placeholderIfAbsent=true',
  title: 'Premium frame brands.'
}];

export default function Index() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0].id);

  return (
    <div className="bg-white">
      <Header />
      
      <main className="bg-white w-full">
        <div className="items-stretch flex w-full gap-[40px_113px] flex-wrap px-4 py-8">
          <aside>
            <ProductGallery images={productImages} />
            <div className="flex w-full px-6 bg-[F5F8FA] bg-[#f5f8fa]">
              <div className="min-w-60 w-full flex-1 shrink basis-[0%]">
                <div className="flex flex-col relative aspect-[4.07] min-h-[43px] w-[175px]">
                  <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/0c0c460bb5d451440f1ba10fb2f7e7454137ace4?placeholderIfAbsent=true" alt="Brand logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-[#32373E] text-base font-light tracking-[0.08px]">
                  Model: TH6319
                </div>
              </div>
            </div>
            
            <div className="w-full px-6 py-8 bg-[F5F8FA] bg-[#f5f8fa]">
              <button className="justify-center items-center border border-[color:var(--Global-Border-interactive,#0072EF)] flex min-h-12 w-full gap-2 text-base text-[#0065D1] font-medium tracking-[0.32px] rounded-[3px] border-solid hover:bg-[#0072EF] hover:text-white transition-colors">
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/68a2245874997bdbc2e6692d1e043fb00dc1d1ea?placeholderIfAbsent=true" alt="Try on" className="w-5 h-5" />
                <span>Try on</span>
              </button>
              
              <div className="flex w-full items-center mt-4">
                <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto">
                  <div className="text-[#32373E] text-[32px] font-bold leading-none tracking-[0.48px]">
                    ₹ 999,00
                  </div>
                  <div className="text-[#606A76] text-sm font-normal tracking-[0.07px] leading-none">
                    Sales tax not included
                  </div>
                </div>
                <div className="flex flex-col items-start self-stretch gap-2 text-base text-[#606A76] font-medium tracking-[0.08px] my-auto">
                  <div className="bg-[#1E8565] flex w-3 h-3 rounded-[50%] mt-10" />
                  <div className="text-[#606A76]">Ships in five days</div>
                </div>
              </div>
            </div>
          </aside>

          <section className="items-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] pt-8">
            <ProductSpecs />
            <ProductOptions
              colors={colorOptions}
              sizes={sizeOptions}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />
            
            <button className="justify-center items-center flex min-h-12 gap-2 text-base text-white font-medium tracking-[0.32px] bg-[#0072EF] rounded-[3px] mt-8 hover:bg-[#0065D1] transition-colors">
              <span>Select lenses</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/aedf310f8d6d00ed163bbad706bac3a686830869?placeholderIfAbsent=true" alt="Next" className="w-5 h-5" />
            </button>
          </section>
        </div>

        <section className="px-4 pb-16">
          <ProductBenefits benefits={benefits} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
