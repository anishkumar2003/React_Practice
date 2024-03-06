import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let today = new Date();
  const year=today.getFullYear();
  const month=today.getMonth()+1;
  const day=today.getDate();
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${year}.${month}.${day}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // console.log(data);
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;
