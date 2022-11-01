import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavList({ data }) {
  const [lsdata, setLsData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://equran.id/api/surat')
      .then((res) => res.json())
      .then((data) => {
        setLsData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return null;
  if (!lsdata) return null;
  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="lg:text-sm lg:leading-6 relative pt-10">
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
          {lsdata.map((list) => {
            return (
              <li>
                <Link
                  className={`${
                    list.nama_latin == data.nama_latin
                      ? 'text-sky-500 dark:text-sky-400 font-semibold'
                      : ''
                  } block border-l pl-4 -ml-px  border-current  `}
                  href={'/surah/' + list.nomor}
                  key={list.nomor}>
                  {list.nama_latin}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
