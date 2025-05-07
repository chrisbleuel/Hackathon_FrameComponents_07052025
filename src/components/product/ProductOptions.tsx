import React from 'react';

interface ColorOption {
  id: string;
  name: string;
  color: string;
}

interface SizeOption {
  id: string;
  label: string;
  dimensions: string;
  unit: string;
}

interface ProductOptionsProps {
  colors: ColorOption[];
  sizes: SizeOption[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (colorId: string) => void;
  onSizeChange: (sizeId: string) => void;
}

export const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-[#32373E] text-xl font-light leading-[1.4] tracking-[0.1px]">
          Colour
        </h2>
        <div className="w-full text-base text-[#32373E] font-bold whitespace-nowrap text-center tracking-[0.08px] gap-4 mt-2">
          <div className="flex w-full gap-4 flex-wrap">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => onColorChange(color.id)}
                className={`max-w-[578px] items-stretch flex flex-col flex-1 shrink basis-[0%] gap-2 p-4 rounded-lg border ${
                  selectedColor === color.id
                    ? 'border-[#0072EF] border-2'
                    : 'border-[#C2CDD6] border'
                }`}
              >
                <div
                  className="self-center flex min-h-6 w-6 h-6 rounded-[19px]"
                  style={{ backgroundColor: color.color }}
                />
                <div className="text-[#32373E] w-full mt-2">{color.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[#32373E] text-xl font-light leading-[1.4] tracking-[0.1px]">
          Frame size
        </h2>
        <div className="w-full text-center gap-4 mt-2">
          <div className="flex w-full gap-4">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => onSizeChange(size.id)}
                className={`max-w-[578px] items-stretch flex w-[130px] flex-col gap-2 p-4 rounded-lg ${
                  selectedSize === size.id
                    ? 'border-[#0072EF] border-2'
                    : 'border-[#C2CDD6] border'
                }`}
              >
                <div className="self-center w-6 text-base text-white font-bold whitespace-nowrap tracking-[0.08px]">
                  <div className="bg-[#606A76] w-full h-6 fill-[#606A76] px-0.5 rounded-[50%] flex items-center justify-center">
                    {size.label}
                  </div>
                </div>
                <div className="flex w-full flex-col mt-2">
                  <div className="text-[#32373E] text-base font-bold tracking-[0.08px]">
                    {size.dimensions}
                  </div>
                  <div className="text-[#606A76] text-sm font-normal leading-none tracking-[0.07px]">
                    {size.unit}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
