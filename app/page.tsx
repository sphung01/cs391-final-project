/* 
    This is the overall display of the Home page
*/
"use client"
import UserInput from "@/components/UserInput"; // done by Julian Lim Jun Ren
export default function Home() {
  const mainStyling = "min-h-screen w-full flex justify-center items-center";
  return (
    <main className={mainStyling}>
      <UserInput/>
    </main>
  );
}
