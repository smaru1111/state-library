import { create } from 'zustand';
import { useState, useEffect } from 'react';
import { persist } from 'zustand/middleware';

// type State = {
//   bears: number;
// };

// type Action = {
//   increaseBear: () => void;
// };

// export const useStore = create<State & Action>()(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       increaseBear: () => set(() => ({ bears: get().bears + 1 })),
//     }),
//     {
//       name: 'bear-storage', // ユニークな名前
//     },
//   ),
// );

type NutsState = {
  bears: number;
  nuts: number;
  honey: number;
};

type NutsAction = {
  increaseBear: (by: number) => void;
  increaseNuts: (by: number) => void;
  increaseHoney: (by: number) => void;
  resetBear: () => void;
  resetNuts: () => void;
  resetHoney: () => void;
};

export const useBearStore = create<NutsState & NutsAction>((set, get) => ({
  bears: 0,
  nuts: 0,
  honey: 0,
  increaseBear: (by) => set((state) => ({ bears: state.bears + by })),
  increaseNuts: (by) => set((state) => ({ nuts: state.nuts + by })),
  increaseHoney: (by) => set((state) => ({ honey: state.honey + by })),
  resetBear: () => set({ bears: 0 }),
  resetNuts: () => set({ nuts: 0 }),
  resetHoney: () => set({ honey: 0 }),
}));

// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
// import { immer } from 'zustand/middleware/immer';

// type State = {
//   bears: number;
// };

// type Action = {
//   increaseBear: (by: number) => void;
// };

// export const useStore = create<State & Action>()(
//   immer(
//     devtools((set) => ({
//       bears: 0,
//       increaseBear: (by) => set((state) => (state.bears = state.bears + by), false, 'increaseBear'),
//     })),
//   ),
// );