import React, { useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "./productLike.scss";

const ProductLike: React.FC = () => {
    const [like, setLike] = useState(false)

    return (
        <button className="product-like" onClick={(e) => setLike(prev => !prev)}>
            {like ? (
                <FaHeart className="icon-like fill" />
            ) : (
                <FaRegHeart className="icon-like" />
            )}
        </button>
    );
};

export default ProductLike;
