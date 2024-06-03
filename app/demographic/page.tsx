import AgeInput from "@/components/demographics/AgeInput";
import DemographicsButton from "@/components/buttons/DemographicsButton";
import Education from "@/components/demographics/Education";
import Gender from "@/components/demographics/Gender";
import Occupation from "@/components/demographics/Occupation";
import PreferedInformationGatheringWay from "@/components/demographics/PreferedInformationGathering";
import Likertscale from "@/components/Likertscale";

export default function Home() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex-coloum sm:justify-center sm:place-self-center p-2 text-center sm:w-[50%]">
                <p className="mb-3">
                    Vielen Dank für Ihre bisherige Arbeit. 
                    Für den letzten Schritt müssen Sie nur noch einige Fragen zu Ihren persönlichen demografischen Daten beantworten.
                </p>
                <div className="mb-3 text-left">
                    <p>Wie alt sind Sie?</p>
                    <AgeInput></AgeInput>
                </div>
                <div className="mb-3 text-left">
                    <p>Welchem Geschlecht ordnen Sie sich zu?</p>
                    <Gender></Gender>
                </div>
                <div className="mb-3 text-left">
                    <p>Welchen höchsten Bildungsabschluss haben Sie?</p>
                    <Education></Education>
                </div>
                <div className="mb-3 text-left">
                    <p>
                        Was ist Ihr derzeitiger Beruf? (z. B.: Wenn Sie derzeit an einer Universität studieren, geben Sie &apos;Student&apos; ein. (Bitte geben Sie &apos;Student&apos; ein, wenn Sie die VP-Stunden benötigen)
                    </p>
                    <Occupation></Occupation>
                </div>
                <div className="mb-3 text-left">
                    <p>Wie hätten Sie sich am liebsten über das Parteiprogramm informiert?</p>
                    <PreferedInformationGatheringWay/>
                </div>
                <div className="mb-3 text-left">
                    <p>
                        Wo würden Sie sich auf der politischen Skala einordnen?
                    </p>
                    <div className="flex flex-col border border-neutral-900 p-5 mb-3">
                        <Likertscale topic="politicalSelfEstimation" descriptionLeft="Links" descriptionRight="Rechts"></Likertscale>
                    </div>
                </div>
                <DemographicsButton></DemographicsButton>
            </div>
        </main>
    );

}