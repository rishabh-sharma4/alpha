import React, { useState, useMemo } from "react";
function Friday() {
    const [item, setItem] = useState(5);
    const [count, setCount] = useState(0);

    const multiMemo = useMemo(function Multi() {
        console.log("Multi")
        return count * 5;
    }, [count])
    return (
        <>
            <h1>Friday, Count:{count}</h1>
            <h1>Multi:{multiMemo}</h1>
            <h1>Item: {item}</h1>
            <button onClick={() => { setCount(count + 1) }}>Update Count</button>
            <button onClick={() => { setItem(item + 1) }}>Update Item</button>
        </>
    )
}
export default Friday;