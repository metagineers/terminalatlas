import Image from "next/image";
import TerminalAtlasLanding from "./components/TerminalAtlasLanding";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="mx-w-7xl w-full">
          <TerminalAtlasLanding />
        </div>
      </div>
    </main>
  );
}
