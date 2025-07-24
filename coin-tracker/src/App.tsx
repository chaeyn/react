import { useEffect, useState } from "react";
import type { CryptoData } from "./types";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<CryptoData[]>([]);
  // <[]>([])은 제네릭 타입을 사용하여 coins의 타입을 CryptoData 배열로 지정
  const [selected, setSelected] = useState<string>("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json: CryptoData[]) => {
        setCoins(json);
        setLoading(false);
      });
    // then은 비동기적으로 데이터를 가져온 후 실행되는 콜백 함수
  }, []);

  const selectedCoin = coins.find(
    (coin) => coin.quotes.USD.price.toString() === selected
  ); // 선택된 코인의 정보를 찾기 위해 선택된 가격과 coins의 가격을 비교

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || !selected) return;
    // 입력값이 비어있거나 선택된 코인이 없을 때는 아무 작업도 하지 않음
    setAmount(parseFloat(event.target.value) / parseFloat(selected));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        The Word Coins! {loading ? null : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong className="loading-text">Loading...</strong>
      ) : (
        <div className="input-group">
          <select
            value={selected}
            onChange={handleSelect}
            className="coin-select"
          >
            <option value="">Select a coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <input
            onChange={onChange}
            type="number"
            placeholder="Enter Amount"
            className="amount-input"
          />
          <span className="result-text">
            {selected && amount ? `${amount} ${selectedCoin?.symbol}` : ""}
            {/* selected가 있고 amount가 있을 때 결과 표시 */}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
