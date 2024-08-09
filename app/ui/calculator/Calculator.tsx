"use client"
import React, { useState, useEffect, ChangeEvent } from "react";


const Calculator: React.FC = () => {
  const [height, setHeight] = useState<number>(100);
  const [weight, setWeight] = useState<number>(20);
  const [bmi, setBMI] = useState<number>(0);

  useEffect(() => {
    const calculateBMI = () => {
      const heightInMeters: number = height / 100;
      const bmiValue: number = weight / (heightInMeters * heightInMeters);
      setBMI(Number(bmiValue.toFixed(2)));
    };

    calculateBMI();
  }, [height, weight]);

  const onWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };

  const onHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };

  const getBmiCategoryColor = (bmi: number): string => {
    if (bmi < 18) {
      return "bg-red-600"; // underweight
    } else if (bmi >= 18 && bmi < 20) {
      return "bg-yellow-600"; // overweight
    } else if (bmi >= 20 && bmi < 24) {
      return "bg-green-600"; // normal weight
    } else if (bmi >= 24 && bmi < 28) {
      return "bg-yellow-600"; //  underweight
    } else {
      return "bg-red-600"; // obesity
    }
  };

  return (
    <div className="container mx-auto mt-[80px] pb-6 w-[478px] max-w-full  text-slate-800 bg-white rounded-[23px] border-[1px] border-blue-500">

      <h2 className="text-4xl font-bold text-blue-500 text-center mt-6 mb-6">BMI CALCULATOR</h2>
      <div className="h-[1px] bg-blue-500"></div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-lg font-medium mb-2 text-left">
              Weight: {weight} kg
            </p>
            <input
              className="w-full"
              type="range"
              step="1"
              min="20"
              max="186"
              value={weight}
              onChange={onWeightChange}
            />
          </div>
          <div>
            <p className="text-lg font-medium mb-2 text-left">
              Height: {height} cm
            </p>
            <input
              className="w-full"
              type="range"
              step="1"
              min="100"
              max="272"
              value={height}
              onChange={onHeightChange}
            />
          </div>
        </div>
        <div className={`border p-2 rounded-[12px] mt-6 ${getBmiCategoryColor(bmi)}`}>
          <h2 className="text-lg text-white text-center">Your BMI is:</h2>
          <p className="text-3xl text-white font-bold text-center mt-1">{bmi}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;