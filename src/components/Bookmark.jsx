import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { Context } from '../contexts/Context';

export default function Bookmark() {
  const { bookmark, removeBookmark, data } = useContext(Context);

  return (
    <div
      tabindex="0"
      class="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow rounded-md">
      <div class="card-body">
        {bookmark.length === 0 ? (
          <div className="flex h-12 justify-center items-center w-full">
            <h1>Tidak ada bookmark</h1>
          </div>
        ) : (
          <ul>
            {bookmark.map((c, i) => {
              return (
                <li key={i} className="flex items-center justify-between">
                  <Link href={'/' + c.surah + '#' + c.nomor}>
                    <span className="btn btn-ghost h-6">
                      {data
                        .filter((x) => x.nomor === c.surah)
                        .map((x) => x.nama_latin)}{' '}
                      ayat {c.nomor}
                    </span>
                  </Link>
                  <span
                    onClick={() => removeBookmark(c)}
                    className="btn btn-ghost btn-square flex justify-center items-center">
                    <svg
                      strokeWidth={2}
                      className="w-5 h-5 cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none">
                      <g transform="translate(3.500000, 2.000000)">
                        <path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524" />
                        <line
                          x1="16.8651429"
                          y1="4.47980952"
                          x2="0.714666667"
                          y2="4.47980952"
                        />
                        <path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952" />
                      </g>
                    </svg>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
