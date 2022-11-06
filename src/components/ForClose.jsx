import { useContext } from 'react';
import { Context } from '../contexts/Context';

export default function ForClose() {
  const { open, setOpen } = useContext(Context);
  return (
    <div
      onClick={() => setOpen(true)}
      className={`${
        open
          ? 'bg-transparent opacity-0 invisible'
          : 'opacty-1 visible bg-[rgba(0,0,0,.2)] z-[29]'
      } block  fixed left-0 right-0 bottom-0 top-0 supports-[backdrop-filter]:backdrop-saturate-[180%] supports-[backdrop-filter]:backdrop-blur-[10px] lg:hidden`}></div>
  );
}
