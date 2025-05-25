import { useState } from "react";

import type { RefObject } from "react";

interface HeaderProps {
  heroRef: RefObject<HTMLElement | null>;
  introduceRef: RefObject<HTMLElement | null>;
  projectRef: RefObject<HTMLElement | null>;
}

const Header = ({ heroRef, introduceRef, projectRef }: HeaderProps) => {
  // 모바일 메뉴 상태 관리
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  // 스크롤 위치로 이동하는 함수

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1">
            <ul className="hidden lg:flex ">
              <li
                className="cursor-pointer text-sm/6 font-semibold text-gray-900 bg-transparent transition hover:text-blue-600"
                onClick={() => scrollToSection(heroRef)}
              >
                Home
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:gap-x-12 bg-white/50 backdrop-blur-md rounded-4xl px-6 py-2 shadow-sm">
            <li
              className="cursor-pointer text-sm/6 font-semibold text-gray-900 bg-transparent transition hover:text-blue-600"
              onClick={() => scrollToSection(introduceRef)}
            >
              Introduce
            </li>
            <li
              className="cursor-pointer text-sm/6 font-semibold text-gray-900 bg-transparent transition hover:text-blue-600"
              onClick={() => scrollToSection(projectRef)}
            >
              Project
            </li>
            {/* <li ...>Experience</li> */}
          </ul>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Contact <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {/* 모바일 메뉴: mobileMenuOpen이 true일 때만 보임 */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <button
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        scrollToSection(heroRef);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Home
                    </button>
                    <button
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        scrollToSection(introduceRef);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Introduce
                    </button>
                    <button
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        scrollToSection(projectRef);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Projects
                    </button>

                    <button
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        scrollToSection(projectRef);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
export default Header;
