import Footer from '../components/Footer';
import { useState } from 'react';
import CardSurah from '../components/CardSurah';

export default function Home({ dataSurah }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="overflow-hidden mt-6 -z-10">
        <div className="max-w-8xl mx-auto px-6">
          <ul className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
            {dataSurah
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
  const dataSurah = await res.json();
  return {
    props: {
      dataSurah,
    },
  };
}
