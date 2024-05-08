import { useRef, useState } from "react"

function UseRef2() {
    const [counter, setCounter] = useState(0);
    // useRef
    // Không thay đổi giá trị khi mà component bị render lại
    // Thay đổi giá trị => không dẫn đến render lại component
    const counterRef = useRef(0);

    const handleClick = () => {
        setCounter(counter + 1);
        counterRef.current = counterRef.current + 1;
    }


    // trả ra cho chúng ta 1 cái href
    console.log(counterRef);

    return (
        <>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UseRef2;