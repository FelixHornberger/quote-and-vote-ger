import NavButton from "@/components/buttons/NavButton";
import ManifestoComponent from "@/components/ManifestoComponent";

export default function Home() {

  
    return (
        <main className="flex flex-col items-center justify-between h-screen">
            <div className="text-center place-items-center mb-3 w-full">
                <h2>Sehen Sie sich das Manifest an und klicken Sie dann auf die Schaltfläche, um zur nächsten Seite zu gelangen, wenn Sie fertig sind.</h2>
            </div>
            <ManifestoComponent></ManifestoComponent>
        <NavButton href="/post-task"></NavButton>
        </main>
    );
}
