import Fot from '../../components/Fot';
import HeadSurah from '../../components/HeadSurah';
import NavList from '../../components/NavList';
import PrevNext from '../../components/PrevNext';
import ForClose from '../../components/ForClose';
import BtnNavList from '../../components/BtnNavList';
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import CardAyat from '../../components/CardAyat';
import TafsirMdl from '../../components/Tafsir';
import { Context } from '../../contexts/Context';
import Bookmark from '../../components/Bookmark';

export default function Surah({ data1, data2, data3 }) {
  const [showModal, setShowModal] = useState(true);
  const { showBookmark, setShowBookmark } = useContext(Context);
  const [nomor, setNomor] = useState('');
  const [bookmark, setBookmark] = useState([]);

  const addToBookmark = (ayatLs) => {
    setBookmark([...bookmark, ayatLs]);
  };

  const removeBookmark = (bookmarkToRemove) => {
    setBookmark(bookmark.filter((x) => x !== bookmarkToRemove));
  };

  const Tafsir = (id) => {
    setShowModal(false);
    setNomor(id);
    const element = document.getElementById('theModal');
    if (nomor !== id) {
      element.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (bookmark.length === 0) return;
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }, [bookmark]);

  useEffect(() => {
    const bookmarkFromLocalStorage = localStorage.getItem('bookmark');

    const parsedBookmark =
      bookmarkFromLocalStorage !== null
        ? JSON.parse(bookmarkFromLocalStorage)
        : [];

    setBookmark(parsedBookmark);
  }, []);

  return (
    <>
      <Head>
        <title>Al-Qur&#39;an</title>
      </Head>

      <NavList data1={data1} data2={data2} />
      <ForClose data3={data3} />

      <TafsirMdl
        data3={data3}
        showModal={showModal}
        setShowModal={setShowModal}
        nomor={nomor}
      />

      <Bookmark
        showBookmark={showBookmark}
        setShowBookmark={setShowBookmark}
        bookmark={bookmark}
        removeBookmark={removeBookmark}
      />

      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[19.5rem]">
            <BtnNavList />
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <HeadSurah data1={data1} />
              <PrevNext data1={data1} />
              {data1.ayat.map((isi) => {
                const test = bookmark.some((c) => c.id === isi.id);
                return (
                  <CardAyat
                    key={isi.nomor}
                    ayat={isi.nomor}
                    arab={isi.ar}
                    latin={isi.tr}
                    translate={isi.idn}
                    Tafsir={Tafsir}
                    addToBookmark={addToBookmark}
                    removeBookmark={removeBookmark}
                    isi={isi}
                    bookmark={bookmark}
                    test={test}
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
