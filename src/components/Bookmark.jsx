import React from 'react';

export default function Bookmark({
  showBookmark,
  setShowBookmark,
  bookmark,
  removeBookmark,
}) {
  return (
    <div
      className={`${
        showBookmark ? 'invisible opacity-0' : 'opacity-100 visible'
      } z-[60] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto supports-[backdrop-filter]:backdrop-saturate-[180%] supports-[backdrop-filter]:backdrop-blur-[10px]`}>
      <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto dark:bg-slate-900 bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b dark:border-slate-50/[0.06] border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal ">Bookmark</h5>
            <span
              onClick={() => setShowBookmark(true)}
              className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:stroke-sky-400">
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </span>
          </div>
          <div id="theModal" className="modal-body relative p-4 text-justify">
            <ul>
              {bookmark.map((x, i) => {
                return (
                  <li key={i}>
                    <span>{x.tr}</span>
                    <span onClick={() => removeBookmark(x)}>Hapus</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-slate-50/[0.06] rounded-b-md">
            <button
              onClick={() => setShowBookmark(true)}
              type="button"
              className="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
