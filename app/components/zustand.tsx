'use client'
import { useBearStore } from '@/store/zustand';

export const ZustandUI = () => {
  const bears = useBearStore((state) => state.bears);
  const increaseBear = useBearStore((state) => state.increaseBear);

  const nuts = useBearStore((state) => state.nuts)
  const honey = useBearStore((state) => state.honey)
  const increaseNut = useBearStore((state) => state.increaseNuts)
  const increaseHoney = useBearStore((state) => state.increaseHoney)
  const resetBear = useBearStore((state) => state.resetBear)
  const resetNuts = useBearStore((state) => state.resetNuts)
  const resetHoney = useBearStore((state) => state.resetHoney)


  return (
    <div>
      <div>🐻: {bears}</div>
      <button onClick={() => increaseBear(1)}>+ 1</button>
      <div>🥜: {nuts}</div>
      <div>🍯: {honey}</div>
      <button onClick={() => increaseNut(1)}>+ 1</button>
      <button onClick={() => increaseHoney(1)}>+ 1</button>
      <button onClick={() => resetBear()}>reset bear</button>
      <button onClick={() => resetNuts()}>reset nuts</button>
      <button onClick={() => resetHoney()}>reset honey</button>
    </div>
  );
};
