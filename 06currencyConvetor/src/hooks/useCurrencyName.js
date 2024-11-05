import { useEffect, useState } from "react";

function useCurrecyName() {
    const [names, setNames] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
            .then(res => res.json())
            .then(res => setNames(res))
    })

    return names
}

export default useCurrecyName;