import Head from 'next/head';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Al-Qur'an</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
        {posts.map((surah) => (
          <li class="text-sm leading-6">
            <div class="relative flex flex-col-reverse bg-slate-50 rounded-lg py-6 dark:bg-slate-800 dark:highlight-white/5">
              <div class="flex">
                <div className="flex pl-6 justify-center items-center">
                  <span className=" text-lg font-extrabold">{surah.nomor}</span>
                </div>
                <div className="pl-6 flex-auto ">
                  <Link
                    href={'/surah/' + surah.nomor}
                    key={surah.nomor}
                    class="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <span class="absolute inset-0"></span>
                    {surah.nama_latin}
                  </Link>
                  <div class="mt-0.5">{surah.arti}</div>
                  <div class="mt-0.5 capitalize text-sky-600 font-medium">
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
    </>
  );
}

export async function getStaticProps() {
  // You can use any data fetching library
  const res = await fetch('https://equran.id/api/surat');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
