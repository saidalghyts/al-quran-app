import PrevNext from './PrevNext';

export default function Fot({ data1 }) {
  return (
    <footer className="text-sm leading-6 mt-16">
      <PrevNext data1={data1} />
      <div className="flex justify-center pt-10 pb-28 border-t border-slate-200 sm:flex text-slate-500 dark:border-slate-200/5">
        <p>Copyright © {new Date().getFullYear()} Said Al-Ghiyats.</p>
      </div>
    </footer>
  );
}
