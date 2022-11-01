import Head from 'next/head';
import NavList from '../../components/NavList';
import Fot from '../../components/Fot';

export default function Surah({ data }) {
  return (
    <>
      <Head>
        <title>Al-Qur&#39;an&nbsp;|&nbsp;{data.nama_latin}</title>
      </Head>

      <NavList data={data} />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              {data.nomor !== 1 ? (
                <h1 className="arabic flex justify-center text-2xl font-bold mb-10">
                  بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </h1>
              ) : null}
              {data.ayat.map((isi) => (
                <>
                  <div
                    key={isi.id}
                    id={isi.nomor}
                    className="p-5 mb-6 scroll-mt-20 relative bg-slate-50 rounded-lg py-6 dark:bg-slate-800 dark:highlight-white/5">
                    <p className="text-sm align-center">{isi.nomor}</p>
                    <p className="leading-[2.8rem] text-xl arabic text-right pb-4">
                      {isi.ar}
                    </p>
                    <p className="text-sm">{isi.idn}</p>
                  </div>
                </>
              ))}
            </main>
            <Fot />
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
  const res = await fetch('https://equran.id/api/surat/' + nomor);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
