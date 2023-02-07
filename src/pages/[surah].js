import Fot from '../components/Fot';
import HeadSurah from '../components/HeadSurah';
import NavList from '../components/NavList';
import ForClose from '../components/ForClose';
import BtnNavList from '../components/BtnNavList';
import { useContext, useState } from 'react';
import Head from 'next/head';
import CardAyat from '../components/CardAyat';
import TafsirMdl from '../components/Tafsir';
import { Context } from '../contexts/Context';
import BookmarkIcon from '../components/BookmarkIcon';

export default function Surah({ data1, data2, data3 }) {
  const { bookmark, removeBookmark, addToBookmark } = useContext(Context);
  const [nomor, setNomor] = useState('');
  const [modal, setModal] = useState(false);

  const Tafsir = (id) => {
    setNomor(id);
    setModal(true);
    const element = document.getElementById('theModal');
    if (nomor !== id) {
      element.scrollTop = 0;
    }
  };

  return (
    <>
      <Head>
        <title>Al-Qur&#39;an</title>
      </Head>

      <NavList data1={data1} data2={data2} />
      <ForClose data3={data3} />

      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <BtnNavList />
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <HeadSurah data1={data1} />
              {data1.ayat.map((isi) => {
                return (
                  <>
                    <CardAyat
                      id={isi.id}
                      key={isi.nomor}
                      ayat={isi.nomor}
                      arab={isi.ar}
                      latin={isi.tr}
                      translate={isi.idn}
                      Tafsir={Tafsir}
                      addToBookmark={addToBookmark}
                      removeBookmark={removeBookmark}
                      isi={isi}>
                      <BookmarkIcon favId={isi.id} />
                    </CardAyat>
                    <TafsirMdl
                      data3={data3}
                      nomor={nomor}
                      modal={modal}
                      setModal={setModal}
                    />
                  </>
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
