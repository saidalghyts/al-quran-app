export default function CardAyat({
  ayat,
  latin,
  translate,
  arab,
  Tafsir,
  addToBookmark,
  removeBookmark,
  isi,
  test,
}) {
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
        <span className={`text-sm `} id="test">
          {ayat}
        </span>
        <div className="flex gap-4">
          <span
            onClick={() => addToBookmark(isi)}
            className="cursor-pointer duration-200">
            <svg
              className="line"
              width={20}
              height={20}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              viewBox="0 0 24 24">
              <g transform="translate(4.500000, 2.500000)">
                <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />

                <line
                  className="svgC v"
                  transform="translate(-4.500000, -2.500000)"
                  x1={12}
                  x2={12}
                  y1={6}
                  y2={12}
                />

                <line
                  className="svgC h"
                  transform="translate(-4.500000, -2.500000)"
                  x1={15}
                  x2={9}
                  y1={9}
                  y2={9}
                />
              </g>
            </svg>
          </span>

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
