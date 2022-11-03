import React from 'react';

export default function Header({ children }) {
  function handleSubmit(e) {
    e.preventDefault();
    return false;
  }
  return (
    <header className="py-10 text-center px-4 md:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
        Al-Qur&#39;an
      </h1>
      <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
        <h2 className="sr-only">Cari surah</h2>
        <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
          <div className="px-2 grow-[9999] basis-64 mt-3">
            <div className="group relative">
              <svg
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-full absolute inset-y-0 left-3 top-2 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
                aria-hidden="true">
                <path d="m19 19-3.5-3.5" />
                <circle cx={11} cy={11} r={6} />
              </svg>
              {children}
            </div>
          </div>
        </form>
      </section>
    </header>
  );
}