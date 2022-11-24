export default function CardAyat({ ayat, latin, translate, arab, Tafsir }) {
  const gh = (w) => {
    let ar = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let nm = `${w}`;
    let result = '';
    for (let c of nm) {
      result += ar[parseInt(c)];
    }
    return result;
  };
  return (
    <div
      id={ayat}
      className={` p-5 mb-6 scroll-mt-20 relative bg-slate-50 rounded-lg dark:bg-slate-800 dark:highlight-white/5`}>
      <div className="pb-6 flex justify-between">
        <span className="text-sm" id="test">
          {ayat}
        </span>
        <div className="flex gap-4">
          <span
            onClick={() => Tafsir(ayat)}
            className="cursor-pointer duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:stroke-sky-400">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
        </div>
      </div>
      <p className="leading-[3.5rem] text-3xl arabic text-right pb-4">
        {arab}&nbsp;{gh(ayat)}
      </p>
      <p className="text-sm pb-2 text-sky-400">{latin}</p>
      <p className="text-sm">{translate}</p>
    </div>
  );
}
