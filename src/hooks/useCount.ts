import { useState } from "react"


const useCount = (countNumber: number, quantity: number) => {
    const [count, setCount] = useState(countNumber)

    const increment = () => {
        if (count < quantity) {
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return { count, increment, decrement}
}

export default useCount;