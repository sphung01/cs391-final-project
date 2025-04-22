/* 
    This is the overall display of the Home page
*/

import SongGenerator from "@/components/SongGenerator";
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-green-200 flex justify-around items-center text-white">
      <SongGenerator />
    </main>
  );
}
