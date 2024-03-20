import { useState } from "react";

const useOpen = (value: boolean) => {
    const [open, setModal] = useState(value)

    const handleOpen = () => {
        setModal(prev => !prev)
    }

    return { open, handleOpen };
};

export default useOpen;
