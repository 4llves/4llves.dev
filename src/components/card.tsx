"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

// const projects = [
//   {
//     title: "LP Psicóloga Monique Brito",
//     description: "",
//     bg_img: "",
//     bg_gif: "",
//     link: "https://www.psicologamonique.com/",
//   },
// ];

export function Card() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="max-w-xs w-full">
        <Link href="https://www.psicologamonique.com/" target="_blank">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end border border-transparent dark:border-neutral-800",
              "bg-psicologamonique-img bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-psicologamonique-gif before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-psicologamonique-gif",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50 w-xs rounded-b-md backdrop-filter backdrop-blur-md bg-black bg-opacity-10 rounded-xl py-2 px-4">
              <h1 className="text-center font-bold text-xl md:text-3xl text-gray-50 relative ">
                Psicóloga Monique Brito
              </h1>
              {/* <p className="font-normal text-base text-gray-50 relative my-4">                
              </p> */}
            </div>
          </div>
        </Link>
      </div>

      <div className="max-w-xs w-full">
        <Link href="https://gporto.vercel.app/" target="_blank">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end border border-transparent dark:border-neutral-800",
              "bg-gporto-img bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-gporto-gif before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-gporto-gif",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50 w-xs rounded-b-md backdrop-filter backdrop-blur-md bg-black bg-opacity-10 rounded-xl py-2 px-4">
              <h1 className="text-center font-bold text-xl md:text-3xl text-gray-50 relative ">
                Personal Gabriel Porto
              </h1>
              {/* <p className="font-normal text-base text-gray-50 relative my-4"></p> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
