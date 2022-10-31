export default function Wrp() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <img
            src="/docs@tinypng.d9e4dcdc.png"
            alt=""
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <img
            src="/docs-dark@tinypng.1bbe175e.png"
            alt=""
            className="hidden w-[90rem] max-w-none flex-none dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}
