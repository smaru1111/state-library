import { ZustandUI } from "./components/zustand";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <ZustandUI />
    </main>
  )
}
