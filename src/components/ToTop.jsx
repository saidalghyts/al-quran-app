import { useState } from 'react';
export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <div
      onClick={scrollToTop}
      className={`${
        visible ? 'opacity-80 bottom-8' : 'opacity-0 -bottom-10'
      } fixed z-[999] right-8 cursor-pointer duration-300 w-10 h-10 rounded-full hover:opacity-100 bg-sky-500 flex items-center justify-center`}>
      <svg
        viewBox="0 0 3 6"
        className="w-3 h-3 rotate-[90deg] text-slate-100 overflow-visible">
        <path
          d="M3 0L0 3L3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
