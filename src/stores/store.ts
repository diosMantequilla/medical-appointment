import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AppState = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

export const useAppStore = create<AppState>()(
    devtools(
        (set) => ({
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }),
        { name: 'AppStore' }
    )
);
