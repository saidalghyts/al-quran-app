import Link from 'next/link';

export default function Head({ data1 }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="p-5 mb-6 lg:w-[50%] md:w-[70%] max-sm:w-[80%] sm:w-[80%] relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5">
        <p className="arabic text-center text-2xl font-semibold pb-2">
          {data1.nama}
        </p>
        <p className="text-center text-lg font-semibold">{data1.nama_latin}</p>
        <p className="text-center text-base font-normal">
          {data1.jumlah_ayat} Ayat | {data1.tempat_turun}
        </p>
        {data1.nomor !== 1 ? (
          <h1 className="arabic flex justify-center text-2xl font-bold my-10">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>
        ) : null}
      </div>
    </div>
  );
}
