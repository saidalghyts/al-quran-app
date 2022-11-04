import Head from 'next/head';
import Fot from '../../components/Fot';
import Link from 'next/link';
import { useState } from 'react';

export default function Surah({ data1, data2 }) {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    return false;
  }
  return (
    <>
      <Head>
        <title>{data1.nama_latin}</title>
        <meta name="description" content="Baca al-qur&#39;an online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${
          open ? 'max-lg:translate-x-[-20rem]' : 'translate-0'
        } duration-100 m block max-lg:dark:bg-slate-900 max-lg:bg-white fixed z-30 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto`}>
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
                <li key={list.nomor} onClick={() => setOpen(true)}>
                  <Link
                    className={`${
                      list.nama_latin == data1.nama_latin
                        ? 'text-sky-500 dark:text-sky-400 font-semibold'
                        : ''
                    } block border-l pl-4 -ml-px  border-current`}
                    href={'/surah/' + list.nomor}
                    key={list.nomor}>
                    {list.nama_latin}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div
        onClick={() => setOpen(true)}
        className={`${
          open
            ? 'bg-transparent opacity-0 invisible'
            : 'opacty-1 visible bg-[rgba(0,0,0,.2)] z-[29]'
        } block  fixed left-0 right-0 bottom-0 top-0 supports-[backdrop-filter]:backdrop-saturate-[180%] supports-[backdrop-filter]:backdrop-blur-[10px]`}></div>
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <div
              onClick={() => setOpen(!open)}
              className={`fixed cursor-pointer z-30 top-[120px] lg:hidden  duration-100 ${
                open ? 'left-0' : 'left-[18.2rem]'
              } `}>
              <div
                className={`${
                  open
                    ? 'rounded-r-[20px] w-[45px]'
                    : 'rounded-[20px] bg-sky-500 dark:bg-sky-500 w-10'
                } flex items-center justify-center relative shadow-[0_5px_20px_0_rgb(0_0_0_/_10%)] h-10  dark:bg-slate-900 bg-white  `}>
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
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <div className="flex justify-center mb-10">
                <div className="p-5 mb-6 lg:w-[50%] md:w-[60%] max-sm:w-[70%] sm:w-[70%] relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5">
                  <p className="arabic text-center text-2xl font-semibold pb-2">
                    {data1.nama}
                  </p>
                  <p className="text-center text-lg font-semibold">
                    {data1.nama_latin}
                  </p>
                  <p className="text-center text-base font-normal">
                    {data1.jumlah_ayat} Ayat | {data1.tempat_turun}
                  </p>
                  {data1.nomor !== 1 ? (
                    <h1 className="arabic flex justify-center text-2xl font-bold my-10">
                      بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                    </h1>
                  ) : null}
                </div>
              </div>

              <div className="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200">
                {data1.surat_sebelumnya === false ? null : (
                  <Link
                    className="group flex items-center hover:text-slate-900 dark:hover:text-white"
                    href={'/surah/' + data1.surat_sebelumnya.nomor}>
                    <svg
                      viewBox="0 0 3 6"
                      className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      <path
                        d="M3 0L0 3L3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {data1.surat_sebelumnya.nama_latin}
                  </Link>
                )}

                {data1.surat_selanjutnya === false ? null : (
                  <Link
                    className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
                    href={'/surah/' + data1.surat_selanjutnya.nomor}>
                    {data1.surat_selanjutnya.nama_latin}
                    <svg
                      viewBox="0 0 3 6"
                      className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>

              {data1.ayat.map((isi) => (
                <div
                  key={isi.nomor}
                  id={isi.nomor}
                  className="p-5 mb-6 scroll-mt-20 relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5">
                  <p className="text-sm align-center pb-6">{isi.nomor}</p>
                  <p className="leading-[2.8rem] text-2xl arabic text-right pb-4">
                    {isi.ar}
                  </p>
                  <p className="text-sm">{isi.idn}</p>
                </div>
              ))}
            </main>
            <Fot data1={data1} />
          </div>
        </div>
      </div>
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch('https://equran.id/api/surat');
  const noSurah = await res.json();
  const paths = noSurah.map((no) => {
    return {
      params: {
        surah: no.nomor.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (contex) => {
  const nomor = contex.params.surah;
  const res1 = await fetch('https://equran.id/api/surat/' + nomor);
  const res2 = await fetch('https://equran.id/api/surat');
  const data1 = await res1.json();
  const data2 = await res2.json();
  return {
    props: {
      data1,
      data2,
    },
  };
};
