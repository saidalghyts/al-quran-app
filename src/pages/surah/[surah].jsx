import Head from 'next/head';
import NavList from '../../components/NavList';
import Fot from '../../components/Fot';
import Link from 'next/link';

export default function Surah({ data1, data2 }) {
  return (
    <>
      <Head>
        <title>{data1.nama_latin}</title>
        <meta name="description" content="Baca al-qur&#39;an online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavList data1={data1} data2={data2} />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <div className="flex justify-center mb-10">
                <div className="p-5 mb-6 w-[40%] relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5">
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
