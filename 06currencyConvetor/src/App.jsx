import { useEffect, useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import useCurrecyName from './hooks/useCurrencyName';

function App() {
  const [amountInput1, setAmountInput1] = useState(0);
  const [amountInput2, setAmountInput2] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  const currencyName = useCurrecyName();
  const currencyInfo = useCurrencyInfo(from);

  const options = currencyName;
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmountInput1(amountInput2);
    setAmountInput2(amountInput1);
  };
  useEffect(() => {
    if (focus1 && currencyInfo[to]) {
      setAmountInput2((amountInput1 * currencyInfo[to]).toFixed(2));
    } else if (focus2 && currencyInfo[from]) {
      setAmountInput1((amountInput2 / currencyInfo[to]).toFixed(2));
    }
  }, [amountInput1, amountInput2, currencyInfo, to, from, focus1, focus2]);

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-3xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <div className="w-full mb-1">
            <InputBox
              label="From"
              onFocus={() => {
                setFocus1(true);
                setFocus2(false);
              }}
              amount={amountInput1}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => {
                if (/^\d*\.?\d*$/.test(amount)) {
                  setAmountInput1(amount);
                }
              }}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              onFocus={() => {
                setFocus2(true);
                setFocus1(false);
              }}
              amount={amountInput2}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmountChange={(amount) => {
                if (/^\d*\.?\d*$/.test(amount)) {
                  setAmountInput2(amount);
                }
              }}
              selectCurrency={to}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
