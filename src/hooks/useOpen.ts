import { useState } from "react";

const useOpen = (value: boolean) => {
    const [open, setOpen] = useState(value)

    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    return { open, handleOpen, setOpen};
};

export default useOpen;
