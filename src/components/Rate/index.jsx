import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const checkRate = async () => {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${from}&to=CZK`
      );
      const json = await response.json();
      setRate(json.rates.CZK);
    };

    checkRate();
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">
        {rate === null ? "Načítám data" : `${rate} CZK`}
      </div>
    </div>
  );
};
