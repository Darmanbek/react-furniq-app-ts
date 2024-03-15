import Cookies from "js-cookie";

export const nameTranslate = (title: any) => {
    const lang = Cookies.get("lang") || "RU";
    return {
        RU: title.ru,
        QQ: title.latin,
        QR: title.kiril,
    }[lang];
};

export const priceFormatter = (price: number) => {
    return Intl.NumberFormat("ru-RU").format(price);
};

export { default as useCatalog } from "./useCatalog";
export { default as useCount } from "./useCount";