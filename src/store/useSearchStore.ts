import { create } from "zustand";


interface ISearchStore {
    search: string;
    changeSearch: (value: string) => void;
}

const useSearchStore = create<ISearchStore>((set) => ({
            search: "",
            changeSearch: (value) => set({ search: value }),
        }),
);

export default useSearchStore;
