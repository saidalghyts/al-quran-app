import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import CardSurah from '../components/CardSurah';

export default function Home({ dataSrh }) {
  const [search, setSearch] = useState('');
  return (
    <>
      <Head>
        <title>Al-Qur&#39;an</title>
        <meta name="description" content="Baca al-qur&#39;an online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setSearch={setSearch} />

      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
          <ul className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {dataSrh
              .filter((surah) =>
                surah.nama_latin.toLowerCase().includes(search)
              )
              .map((surah) => (
                <CardSurah
                  key={surah.nomor}
                  nomor={surah.nomor}
                  jumlahAyat={surah.jumlah_ayat}
                  tempatTurun={surah.tempat_turun}
                  surahArab={surah.nama}
                  namaSurah={surah.nama_latin}
                  artiSurah={surah.arti}
                />
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://equran.id/api/surat');
  const dataSrh = await res.json();
  return {
    props: {
      dataSrh,
    },
  };
}
