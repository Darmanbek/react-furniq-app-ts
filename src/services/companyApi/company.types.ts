import { TImages } from "@/models";

export type TCompany = {
    data: TCompanyData;
};

export type TCompanyData = {
    id: number;
    company_name: string;
    description: string;
    rating: string;
    review_count: string;
    images: TImages[];
    creaeted_at: string;
};
