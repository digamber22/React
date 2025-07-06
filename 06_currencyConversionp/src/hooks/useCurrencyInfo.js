import { useEffect, useState } from "react";

// takes both from and to currency
function useCurrencyInfo(from, to) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!from || !to) return;

    fetch(`https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => {
        console.error("Currency fetch failed", err);
        setData({});
      });
  }, [from, to]);

  return data;
}

export default useCurrencyInfo;
