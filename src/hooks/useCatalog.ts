import { useState } from "react";


const useCatalog = (catalogRef: any) => {
    const [showCatalog, setShowCatalog] = useState(false);

    const handleShowCatalog = () => {
        setShowCatalog(prev => !prev);
    }

    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(catalogRef.current)) {
            setShowCatalog(false);
        }
    })

    return { showCatalog, handleShowCatalog }
}

export default useCatalog;