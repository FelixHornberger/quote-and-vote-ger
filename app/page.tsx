import NavButton from "@/components/buttons/NavButton";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-center place-items-center mb-3">
        <h1 >Willkommen zu meiner Studie</h1>
      </div>
        <div className="px-5 flex justify-center">
          <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
              <p className="">
                Sie sind eingeladen worden, an meiner Online-Studie teilzunehmen. 
                Am 9. Juni 2024 finden die Europawahlen statt und wir wählen nationale Parteien, die Sitze im Europäischen Parlament gewinnen können. 
                Die meisten nationalen Parteien schließen sich zu politischen Gruppierungen zusammen. Diese Gruppierungen haben ihre eigenen Wahlprogramme.  
                Ziel dieser Studie ist es, den Teilnehmern verschiedene Möglichkeiten zu bieten, sich über eine Partei ihrer Wahl zu informieren, und zu analysieren, wie sich dies auf ihre Beschäftigung mit dem Material und den Umfang des erworbenen politischen Wissens auswirkt.
                Die Studie wird von Felix Hornberger durchgeführt und von Dr. David Elsweiler von der Universität Regensburg betreut. 
                Die Dauer der Studie beträgt 15 Minuten. Studierende der Universität Regensburg erhalten 0,25 Versuchspersonenstunden. 
                Die Studie kann nur einmal gestartet werden und sollte in einem Durchgang abgeschlossen werden.
              </p>
          </div>
        </div>
        <NavButton href={"/information-consent"}></NavButton>
    </main>
  );
}
