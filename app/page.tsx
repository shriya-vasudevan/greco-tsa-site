import Image from "next/image";
import { inter, lato } from '@/app/ui/fonts';

export default function Home () {
  return (
    <main>
      <h1 className="text-green-50">GRECO</h1>
      <Image src="/windmill.svg" width="389" height="759" alt=""/>
    </main>
  );
}
