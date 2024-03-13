import React from "react";
import { TImages } from "@/models";
import { NoImage } from "@/assets";
import "./productImage.scss";

interface ProductImageProps {
    image: TImages | null
}

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
    
    return (
        <div className="product-image">
            <img 
            src={image ? image?.url : NoImage}
            alt={image?.url}
            />
        </div>
    );
};

export default ProductImage;
