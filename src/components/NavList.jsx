import { useState } from 'react';
import Link from 'next/link';

export default function NavList({ data1, data2 }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    return false;
  }
  return (
    <>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } lg:block fixed z-50 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto`}>
        <nav className="lg:text-sm lg:leading-6 relative">
          <div className="sticky top-0 -ml-0.5 pointer-events-none">
            <div className="h-8 bg-white dark:bg-slate-900"></div>
            <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
              <form
                className="flex flex-wrap -mx-2 sticky"
                onSubmit={handleSubmit}>
                <div className="px-2 grow-[9999] basis-64 mt-3">
                  <div className="group relative">
                    <svg
                      width={24}
                      height={24}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-full absolute inset-y-0 left-3 top-2 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
                      aria-hidden="true">
                      <path d="m19 19-3.5-3.5" />
                      <circle cx={11} cy={11} r={6} />
                    </svg>
                    <input
                      type="search"
                      className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                      placeholder="Cari surah"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
          </div>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            {data2
              .filter((list) => list.nama_latin.toLowerCase().includes(search))
              .map((list) => (
                <li key={list.nomor}>
                  <Link
                    className={`${
                      list.nama_latin == data1.nama_latin
                        ? 'text-sky-500 dark:text-sky-400 font-semibold'
                        : ''
                    } block border-l pl-4 -ml-px  border-current  `}
                    href={'/surah/' + list.nomor}
                    key={list.nomor}>
                    {list.nama_latin}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
