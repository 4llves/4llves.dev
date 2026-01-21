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
    <div className="w-[1440px] grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <div className="max-w-xs w-full">
        <Link href="https://www.psicologamonique.com/" target="_blank">
          <div
            className={cn(
              "w-[450px] cursor-pointer aspect-[16/9] overflow-hidden rounded-md shadow-xl flex flex-col justify-end border border-transparent dark:border-neutral-800 hover:bg-black hover:opacity-50",
              "bg-psicologamonique-img bg-cover",              
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-20 w-xs rounded-b-md backdrop-filter backdrop-blur-md bg-black bg-opacity-10 rounded-xl py-2 px-4">
              <h1 className="text-center font-bold text-xl md:text-2xl text-gray-50 relative ">
                Psicóloga Monique
              </h1>
              {/* <p className="font-normal text-base text-gray-50 relative my-4">                
              </p> */}
            </div>
          </div>
        </Link>
      </div>

      <div className="max-w-xs w-full">
        <Link href="https://www.movemarias.org.br/" target="_blank">
          <div
            className={cn(
              "w-[450px] cursor-pointer aspect-[16/9] overflow-hidden rounded-md shadow-xl flex flex-col justify-end border border-transparent dark:border-neutral-800 hover:bg-black hover:opacity-50",
              "bg-movemarias-img bg-cover",              
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-20 w-xs rounded-b-md backdrop-filter backdrop-blur-md bg-black bg-opacity-10 rounded-xl py-2 px-4">
              <h1 className="text-center font-bold text-xl md:text-2xl text-gray-900 relative">
                Move Marias
              </h1>              
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
