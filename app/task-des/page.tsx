'use client'

import { useHrefStore } from "@/zustand/href"
import NavButton from "@/components/buttons/NavButton";

export default function Home() {
  
  const {href} = useHrefStore();
    
  let stringToDisplay = `Auf der folgenden Seite finden Sie das Parteiprogramm als PDF.
  Das Laden der PDF kann bis zu 5 Sekunden dauern. Sie können sich beliebig viel Zeit nehmen, um das Parteiprogramm zu lesen. 
  Wenn Sie alle Informationen über das Parteiprogramm erhalten haben, die für Sie wichtig sind, können Sie zur nächsten Seite wechseln.`

  if (href === '/chat') {
    stringToDisplay = `Auf der nächsten Seite können Sie mit einem Chatbot über das Parteiprogramm schreiben. 
    Sie können so lange mit dem Chatbot interagieren, wie Sie möchten. 
    Wenn sie alle Informationen über das Parteiprogramm haben, die für Sie wichtig sind, können Sie zur nächsten Seite gehen.`
  }
  
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="my-3">Aufgabebeschreibung</h1>
      <p className="px-5 sm:w-[50%] self-center">
              {stringToDisplay}
          </p>
          <NavButton href={href}></NavButton>
    </main>
  );
}
    