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
    <div className="card w-auto bg-base-100 shadow-xl rounded-md">
      <div className="card-body p-6">
        <h2 className="card-title text-base w-full">
          {namaSurah} <span className="font-normal">{artiSurah}</span>
        </h2>
        <p className="text-sm capitalize">
          {tempatTurun} ({jumlahAyat})
        </p>
        <div className="card-actions justify-end">
          <Link href={'/' + nomor}>
            <button className="btn btn-primary">Baca</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
