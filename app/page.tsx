/* 
    This is the overall display of the Home page
    Note: tailwinds's sm: prefix is used throughout to make the app responsive for smaller devices, 
    where sm:something means that this styling will only be applied when the screen size is at least 384px.
    Medium and large screens have generally the same styling, shrinking as needed.
*/
"use client"
import UserInput from "@/components/UserInput"; // done by Julian Lim Jun Ren
export default function Home() {
  const mainStyling = "min-h-screen w-full flex justify-center sm:items-center";
  return (
    <main className={mainStyling}>
      <UserInput/>
    </main>
  );
}
