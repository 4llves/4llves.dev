/* eslint-disable camelcase */
"use client";
import clsx from "clsx";
import { useState } from "react";
import { Chakra_Petch } from "next/font/google";
import { AllvesLogo } from "./allves-logo";
import Link from "next/link";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
});

export function HamburguerMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItemClassName = clsx(
    "md:block text-xl group cursor-pointer hover:text-primary font-bold",
    {
      visible: mobileMenuOpen,
      hidden: !mobileMenuOpen,
    }
  );

  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full flex px-4 md:px-0 py-3 mx-auto bg-[#141414] backdrop-filter backdrop-blur-md bg-opacity-10 overflow-y-hidden">
      <header
        className={clsx(
          `md:max-w-5xl w-full md:m-auto md:flex md:items-center md:justify-between text-primary p-8 md:p-5 flex flex-col md:flex-row gap-10 ${chakraPetch.className}`,
          {
            "h-screen": mobileMenuOpen,
          }
        )}
      >
        <Link href="/" className={menuItemClassName} onClick={handleLinkClick}>
          {mobileMenuOpen ? (
            <div className="flex items-center gap-4">
              <AllvesLogo /> 4llves dev
            </div>
          ) : (
            <AllvesLogo />
          )}
        </Link>

        <Link href="/" className={menuItemClassName} onClick={handleLinkClick}>
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-600 ease-in-out">
            &lt;{" "}
          </strong>
          Home
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-1000 ease-in-out">
            {" "}
            /&gt;
          </strong>
        </Link>

        <Link
          href="/about"
          className={menuItemClassName}
          onClick={handleLinkClick}
        >
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-600 ease-in-out">
            &lt;{" "}
          </strong>
          Sobre
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-1000 ease-in-out">
            {" "}
            /&gt;
          </strong>
        </Link>

        <Link
          href="/projects"
          className={menuItemClassName}
          onClick={handleLinkClick}
        >
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-600 ease-in-out">
            &lt;{" "}
          </strong>
          Projetos
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-1000 ease-in-out">
            {" "}
            /&gt;
          </strong>
        </Link>

        <Link
          href="/talks"
          className={menuItemClassName}
          onClick={handleLinkClick}
        >
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-600 ease-in-out">
            &lt;{" "}
          </strong>
          Talks
          <strong className="text-primary md:group-hover:text-primary md:text-transparent transition duration-1000 ease-in-out">
            {" "}
            /&gt;
          </strong>
        </Link>

        <button
          type="button"
          className="md:hidden absolute right-4 top-6"
          onClick={() => {
            setMobileMenuOpen((currentValue) => !currentValue);
          }}
        >
          <div
            className={clsx(
              "w-10 h-1 bg-white mb-1 transition-all duration-300 ease-in-out",
              {
                "rotate-45 translate-y-2": mobileMenuOpen,
              }
            )}
          />
          <div
            className={clsx("w-10 h-1 bg-white mb-1", {
              hidden: mobileMenuOpen,
            })}
          />
          <div
            className={clsx(
              "w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out",
              {
                "-rotate-45": mobileMenuOpen,
              }
            )}
          />
        </button>
      </header>
    </div>
  );
}
