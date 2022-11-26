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

export default function Surah({ data1, data2, data3 }) {
  const localBookmark =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('bookmark'))
      : [];

  const [showModal, setShowModal] = useState(true);
  const { showBookmark, setShowBookmark } = useContext(Context);
  const [nomor, setNomor] = useState('');
  const [bookmark, setBookmark] = useState(localBookmark);
  console.log(bookmark);

  const Tafsir = (id) => {
    setShowModal(false);
    setNomor(id);
    const element = document.getElementById('theModal');
    if (nomor !== id) {
      element.scrollTop = 0;
    }
  };

  const addToBookmark = (ayatLs) => {
    setBookmark([...bookmark, ayatLs]);
  };

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }, [bookmark]);

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

      <div
        className={`${
          showBookmark ? 'invisible opacity-0' : 'opacity-100 visible'
        } z-[60] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto supports-[backdrop-filter]:backdrop-saturate-[180%] supports-[backdrop-filter]:backdrop-blur-[10px]`}>
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto dark:bg-slate-900 bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b dark:border-slate-50/[0.06] border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal ">Bookmark</h5>
              <span
                onClick={() => setShowBookmark(true)}
                className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:stroke-sky-400">
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </span>
            </div>
            <div id="theModal" className="modal-body relative p-4 text-justify">
              <ul>
                {bookmark.map((x) => (
                  <li key={x.nomor}>{x.tr}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-slate-50/[0.06] rounded-b-md">
              <button
                onClick={() => setShowBookmark(true)}
                type="button"
                className="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

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
                    addToBookmark={addToBookmark}
                    isi={isi}
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
