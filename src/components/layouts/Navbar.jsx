import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Context } from '../../contexts/Context';
import Bookmark from '../Bookmark';

function Nav() {
  const { bookmark } = useContext(Context);
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100 sticky top-0 max-w-8xl mx-auto z-50">
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
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24">
                <g transform="translate(4.500000, 2.500000)">
                  <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />
                </g>
              </svg>
              <span
                className={`${
                  bookmark.length == 0
                    ? 'invisible scale-0'
                    : 'visible scale-100'
                } badge badge-sm indicator-item w-4 h-[1.1rem] text-xs`}>
                {bookmark.length}
              </span>
            </div>
          </label>
          <Bookmark />
        </div>
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
