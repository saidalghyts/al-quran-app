export default function Tafsir({ data3, nomor }) {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div id="theModal" className="modal-box relative max-h-[50%] py-0">
          <div className="sticky top-0 bg-inherit py-3 flex items-center justify-between ">
            <h3 className="text-sm font-bold">Bookmark</h3>
            <label htmlFor="my-modal-4" className="btn btn-sm btn-circle">
              ✕
            </label>
          </div>
          <p>
            {data3.tafsir.filter((x) => x.ayat === nomor).map((x) => x.tafsir)}
          </p>
          <div className="h-6 bg-inherit w-full sticky -bottom-1"></div>
        </div>
      </div>
    </>
  );
}
