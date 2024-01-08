import { ModeToggle } from "./darkmode-toggle";
import { AvatarIcon } from "@radix-ui/react-icons";
import { GeistMono } from "geist/font/mono";

export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 border border-dashed border-neutral-300/30 backdrop-blur-lg dark:border-neutral-700/30">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between border border-b-0 border-t-0 border-dashed border-neutral-300/30 p-3.5 py-2.5 dark:border-neutral-700/30">
        <h1
          className={`flex items-center gap-x-1 text-sm font-extrabold text-neutral-400 ${GeistMono.className}`}
        >
          <AvatarIcon className=" text-neutral-600 dark:text-neutral-500" />
          itsarghyadas.dev
        </h1>
        <ModeToggle />
      </div>
    </nav>
  );
}
