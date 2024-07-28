import Image from "next/image";
import GameMain from "./game/controllers/gamemain";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative">Incremental Idle Game!<br/>Under construction<br/></div>
      <GameMain />
    </main>
  );
}
