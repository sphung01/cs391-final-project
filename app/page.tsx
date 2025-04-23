/* 
    This is the overall display of the Home page
*/

import UserInput from "@/components/UserInput"; // done by Julian Lim Jun Ren
export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <UserInput />
    </main>
  );
}
