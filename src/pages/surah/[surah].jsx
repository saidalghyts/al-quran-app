import Head from 'next/head';
import Fot from '../../components/Fot';
import HeadSurah from '../../components/HeadSurah';
import NavList from '../../components/NavList';
import PrevNext from '../../components/PrevNext';
import ForClose from '../../components/ForClose';
import BtnNavList from '../../components/BtnNavList';

export default function Surah({ data1, data2 }) {
  return (
    <>
      <Head>
        <title>{data1.nama_latin}</title>
        <meta name="description" content="Baca al-qur&#39;an online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavList data1={data1} data2={data2} />
      <ForClose />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <BtnNavList />
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <HeadSurah data1={data1} />
              <PrevNext data1={data1} />
              {data1.ayat.map((isi) => (
                <div
                  key={isi.nomor}
                  id={isi.nomor}
                  className="p-5 mb-6 scroll-mt-20 relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5">
                  <div className="pb-6 flex justify-between">
                    <span className="text-sm">{isi.nomor}</span>
                    <span className="text-sm cursor-pointer">i</span>
                  </div>
                  <p className="leading-[3.5rem] text-2xl arabic text-right pb-4">
                    {isi.ar}
                  </p>
                  <p className="text-sm pb-2">{isi.tr}</p>
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
