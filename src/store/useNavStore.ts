import { create } from "zustand";

interface IUseNavStore {
    path: string;
    toPath: (link: string) => void;
}

const useNavStore = create<IUseNavStore>()((set) => ({
    path: "/",
    toPath: (link: string) => set({ path: link }),
}));

export default useNavStore;
