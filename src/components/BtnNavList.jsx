import { useContext } from 'react';
import { Context } from '../contexts/Context';

export default function BtnNavList() {
  const { open, setOpen } = useContext(Context);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`fixed cursor-pointer z-30 top-[120px] lg:hidden  duration-100 ${
        open ? 'left-0' : 'left-[18.2rem]'
      } `}>
      <div
        className={`${
          open
            ? 'rounded-r-[20px] w-[45px] dark:bg-slate-800 bg-white'
            : 'rounded-[20px] bg-sky-500 dark:bg-sky-500 w-10'
        } flex items-center justify-center relative shadow-[0_5px_20px_0_rgb(0_0_0_/_10%)] h-10  `}>
        <svg
          viewBox="0 0 3 6"
          className={`${
            open ? 'text-slate-400' : 'rotate-[180deg] text-white'
          } w-3 h-3  overflow-visible `}>
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
