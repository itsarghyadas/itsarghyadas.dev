import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="border-t-0items-center mx-auto flex w-full  max-w-2xl justify-between border border-b-0 border-dashed p-5">
        <p className="font-geistMono text-sm font-[550] text-neutral-500 dark:text-neutral-400/90">
          Built by Arghya
        </p>
        <div className="flex items-center gap-x-2">
          <TwitterLogoIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400/70" />
          <GitHubLogoIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400/70" />
        </div>
      </div>
    </footer>
  );
}
