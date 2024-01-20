import Image from "next/image";
//import Windmill from "/windmill.svg";

export default function Home () {
  return (
    <main>
      <h1 className="text-green-50">GRECO</h1>
      <Image src="/windmill.svg" width="389" height="759" alt=""/>
    </main>
  );
}
