import PreTaskButton from "@/components/buttons/PreTaskButton";
import InfoText from "@/components/preTask/InfoText";
import QuestionElement from "@/components/preTask/QuestionElement";
import QuestionElement2 from "@/components/preTask/QuestionElement2";

export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <div className="text-center place-items-center mb-3">
        <h1>Bitte beantworte die folgenden Fragen:</h1>
      </div>
      <div className="w-[75%] sm:w-[50%]">
        <InfoText></InfoText>
        <QuestionElement2 question={"Für welche EU-Partei interessierst Sie sich?"}></QuestionElement2>
        <QuestionElement question={"Warum interessierst Sie sich für diese Partei?"} topic={"eligibilityBefore"}  ></QuestionElement>
      </div>
      <PreTaskButton></PreTaskButton>
    </main>
  );
}
