import PreStudyButton from "@/components/buttons/PreStudyButton";
import QuesitonElementPreStudy from "@/components/preStudy/QuestiomElementPreStudy";

export default function Home() {


  const question1 = "Wie viele Mitglieder hat das Europäische Parlament?";
  const labels1 = ["a) 600","b) 705","c) 751","d) 800", "e) Ich weiß es nicht"];

  const question2 = "In welchen Abständen finden die Wahlen zum Europäischen Parlament statt?";
  const labels2 = ["a) Alle 3 Jahre","b) Alle 4 Jahre","c) Alle 5 Jahre","d) Alle 6 Jahre", "e) Ich weiß es nicht"];

  const question3 = "Welche der folgenden Institutionen teilt sich die gesetzgebende Gewalt mit dem Europäischen Parlament?";
  const labels3 = ["a) Der Europäische Rat","b) Die Europäische Kommission","c) Der Rat der Europäischen Union","d) Der Europäische Gerichtshof", "e) Ich weiß es nicht"];

  const question4 = "Was ist die Hauptfunktion des Europäischen Parlaments?";
  const labels4 = ["a) Neue EU-Gesetze vorschlagen","b) Gesetze verabschieden und ändern","c) Den EU-Haushalt direkt verwalten","d) Bei rechtlichen Streitigkeiten zwischen Mitgliedstaaten vermitteln", "e) Ich weiß es nicht"];

  const question5 = "Wie nennt man den Prozess, wenn das Europäische Parlament über die Zustimmung oder Ablehnung der gesamten Europäischen Kommission abstimmt?";
  const labels5 = ["a) Bestätigungshörung","b) Gesetzesprüfung","c) Misstrauensvotum","d) Investiturabstimmung", "e) Ich weiß es nicht"];

  return (
    <main className="flex flex-col items-center">
      <div className="text-center place-items-center mb-3">
        <h1>Bitte beantworten Sie die folgenden Fragen:</h1>
      </div>
      <div className="w-[75%] sm:w-[50%]">
        <QuesitonElementPreStudy question={question1} labels={labels1} answerKey="answer1"  ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question2} labels={labels2} answerKey="answer2"  ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question3} labels={labels3} answerKey="answer3" ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question4} labels={labels4} answerKey="answer4" ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question5} labels={labels5} answerKey="answer5" ></QuesitonElementPreStudy>
      </div>
      <PreStudyButton></PreStudyButton>
    </main>
  );
}