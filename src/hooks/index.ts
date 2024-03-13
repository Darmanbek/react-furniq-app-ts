import { TName } from "@/models";

export const titleTranslate = (title: TName, lang: string) => ({
    "RU": title.ru,
    "QQ": title.latin,
    "QR": title.kiril,
}[lang]);

export const priceFormatter = (price: number) => {
    return Intl.NumberFormat("ru-RU").format(price)
}