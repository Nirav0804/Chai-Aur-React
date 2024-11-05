/* eslint-disable react/prop-types */
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    onFocus
}) {
    const amountInputId = useId();
    return (
        <div className={`bg-gray-500 p-3 rounded-lg text-sm flex${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white mb-2 inline-block">{label}</label>
                <input
                    onFocus={onFocus}
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 bg-gray-600 rounded-sm flex justify-center text-cyan-500"
                    type="number"
                    placeholder="Enter Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value === '' ? '' : Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>
                    <option value="" disabled>Select a currency</option>
                    {Object.entries(currencyOptions).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value} ({key})
                        </option>
                    ))}
                </select>

            </div>
        </div>
    );
}

export default InputBox;