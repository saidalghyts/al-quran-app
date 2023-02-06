import { useContext, useState } from 'react';
import Link from 'next/link';
import { Context } from '../contexts/Context';

export default function NavList({ data1, data2 }) {
  const { open, setOpen } = useContext(Context);
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    return false;
  }
  return (
    <div
      className={`${
        open ? 'max-lg:translate-x-[-20rem]' : 'translate-0'
      } duration-100 block dark:bg-slate-900 max-lg:bg-white fixed z-30 inset-0 top-[3.780rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto`}>
      <nav className="lg:text-sm lg:leading-6 relative">
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
          {data2
            .filter((list) => list.nama_latin.toLowerCase().includes(search))
            .map((list) => (
              <li key={list.nomor} onClick={() => setOpen(true)}>
                <Link
                  className={`${
                    list.nama_latin == data1.nama_latin ? 'text-sky-500' : ''
                  } block border-l-2 pl-4 -ml-px border-current hover:text-sky-500 font-semibold`}
                  href={'/' + list.nomor}
                  key={list.nomor}>
                  {list.nama_latin}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
