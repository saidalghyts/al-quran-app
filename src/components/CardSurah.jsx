import Link from 'next/link';

export default function CardSurah({
  nomor,
  tempatTurun,
  jumlahAyat,
  surahArab,
  namaSurah,
  artiSurah,
}) {
  return (
    <li className="text-sm leading-6">
      <div className="relative flex flex-col-reverse py-6 group rounded-xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
        <div className="flex">
          <div className="flex justify-center items-center">
            <span className=" text-lg font-extrabold">{nomor}</span>
          </div>
          <div className="pl-6 flex-auto ">
            <Link
              href={'/surah/' + nomor}
              className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
              <span className="absolute inset-0"></span>
              {namaSurah}
            </Link>
            <div className="mt-0.5 text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
              {artiSurah}
            </div>
            <div className="mt-0.5 capitalize text-sky-500 font-medium text-sm">
              {jumlahAyat} ayat | {tempatTurun}
            </div>
          </div>
          <div className="flex-auto justify-end flex items-center pl-6 text-lg">
            <span className="font-semibold arabic">{surahArab}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
