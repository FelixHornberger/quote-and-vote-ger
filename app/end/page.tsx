import NavButton from "@/components/buttons/NavButton";
import SurveyID from "@/components/endpage/SurveyID";
import VPInformation from "@/components/endpage/VPInformation";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between">
       <div className="text-center place-items-center mb-3">
                <h1>Vielen Dank für Ihre Teilnahme!</h1>
            </div>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
                    <p className="text-padding">
                        <SurveyID/>
                        <br />
                        Wenn Sie Fragen oder Anmerkungen zu der Studie haben, zögern Sie bitte nicht, mich zu kontaktieren.
                        <br />
                        Felix Hornberger: Felix.Hornberger@stud.uni-regensburg.de
                    </p>
                </div>
            </div>
        <VPInformation/>
    </main>
  );
}
