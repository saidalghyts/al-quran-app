import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home({ dataSrh }) {
  return (
    <>
      <Head>
        <title>Al-Qur&#39;an</title>
        <meta name="description" content="Baca al-qur&#39;an online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
          <ul className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {dataSrh.map((surah) => (
              <li className="text-sm leading-6" key={surah.id}>
                <div className="relative flex flex-col-reverse bg-slate-50 rounded-lg py-6 dark:bg-slate-800 dark:highlight-white/5">
                  <div className="flex">
                    <div className="flex pl-6 justify-center items-center">
                      <span className=" text-lg font-extrabold">
                        {surah.nomor}
                      </span>
                    </div>
                    <div className="pl-6 flex-auto ">
                      <Link
                        href={'/surah/' + surah.nomor}
                        key={surah.nomor}
                        className="text-base text-slate-900 font-semibold dark:text-slate-300">
                        <span className="absolute inset-0"></span>
                        {surah.nama_latin}
                      </Link>
                      <div className="mt-0.5">{surah.arti}</div>
                      <div className="mt-0.5 capitalize text-sky-600 font-medium">
                        {surah.jumlah_ayat} ayat | {surah.tempat_turun}
                      </div>
                    </div>
                    <div className="flex-auto justify-end flex items-center px-6 text-lg">
                      <span className="font-semibold arabic">{surah.nama}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // You can use any data fetching library
  const res = await fetch('https://equran.id/api/surat');
  const dataSrh = await res.json();
  return {
    props: {
      dataSrh,
    },
  };
}
