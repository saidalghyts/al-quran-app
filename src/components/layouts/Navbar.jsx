import Link from 'next/link';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function Nav() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100 sticky top-0 max-w-8xl mx-auto z-30">
      <div className="flex-none">
        <label for="drawer" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Al-Quran
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li>
              <a data-set-theme="" data-act-class="ACTIVECLASS">
                System
              </a>
            </li>
            <li>
              <a data-set-theme="dark" data-act-class="ACTIVECLASS">
                Dark
              </a>
            </li>
            <li>
              <a data-set-theme="light" data-act-class="ACTIVECLASS">
                Light
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
