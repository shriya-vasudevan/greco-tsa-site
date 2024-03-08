import Image from "next/image";
import Title from "@/components/title";

export default function Home () {
  return (
    <main>
      <Title title="GRECO"/>
      <Image src="/circlez.svg" width="546" height="832" alt=""/>
      <Image src="/windmill.svg" width="389" height="759" alt=""/>
    </main>
  );
}
