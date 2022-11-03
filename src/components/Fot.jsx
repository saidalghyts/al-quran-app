import Link from 'next/link';

export default function Fot({ data1 }) {
  return (
    <footer className="text-sm leading-6 mt-16">
      <div className="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200">
        {data1.surat_sebelumnya === false ? null : (
          <Link
            className="group flex items-center hover:text-slate-900 dark:hover:text-white"
            href={'/surah/' + data1.surat_sebelumnya.nomor}>
            <svg
              viewBox="0 0 3 6"
              className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300">
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {data1.surat_sebelumnya.nama_latin}
          </Link>
        )}

        {data1.surat_selanjutnya === false ? null : (
          <Link
            className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
            href={'/surah/' + data1.surat_selanjutnya.nomor}>
            {data1.surat_selanjutnya.nama_latin}
            <svg
              viewBox="0 0 3 6"
              className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300">
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="flex justify-center pt-10 pb-28 border-t border-slate-200 sm:flex text-slate-500 dark:border-slate-200/5">
        <p>Copyright © 2022 Said Al-Ghiyats.</p>
      </div>
    </footer>
  );
}
