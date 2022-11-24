import Fot from '../../components/Fot';
import HeadSurah from '../../components/HeadSurah';
import NavList from '../../components/NavList';
import PrevNext from '../../components/PrevNext';
import ForClose from '../../components/ForClose';
import BtnNavList from '../../components/BtnNavList';
import { useState } from 'react';
import Head from 'next/head';
import CardAyat from '../../components/CardAyat';
import TafsirMdl from '../../components/Tafsir';

export default function Surah({ data1, data2, data3 }) {
  const [showModal, setShowModal] = useState(true);
  const [nomor, setNomor] = useState('');

  const Tafsir = (id) => {
    setShowModal(false);
    setNomor(id);
    const element = document.getElementById('theModal');
    if (nomor !== id) {
      element.scrollTop = 0;
    }
  };

  return (
    <>
      <Head>
        <title>{data1.nama_latin} | Al-Qur&#39;an</title>
      </Head>

      <NavList data1={data1} data2={data2} />
      <ForClose data3={data3} />

      <TafsirMdl
        data3={data3}
        showModal={showModal}
        setShowModal={setShowModal}
        nomor={nomor}
      />

      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <BtnNavList />
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <HeadSurah data1={data1} />
              <PrevNext data1={data1} />
              {data1.ayat.map((isi) => {
                return (
                  <CardAyat
                    key={isi.nomor}
                    ayat={isi.nomor}
                    arab={isi.ar}
                    latin={isi.tr}
                    translate={isi.idn}
                    Tafsir={Tafsir}
                  />
                );
              })}
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
  const res3 = await fetch('https://equran.id/api/tafsir/' + nomor);
  const data1 = await res1.json();
  const data2 = await res2.json();
  const data3 = await res3.json();
  return {
    props: {
      data1,
      data2,
      data3,
    },
  };
};
