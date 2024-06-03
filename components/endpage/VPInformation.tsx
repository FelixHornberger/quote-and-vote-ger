'use client'

import { useVPStore } from "@/zustand/vp";
import SubmitVPButton from "../buttons/SubmitVPButton";
import DegreeProgramm from "./DegreeProgramm";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Martikel from "./Matrikel";

export default function VPInformation() {

    const { vp } = useVPStore();

    return (
        <>
        { vp &&
            <> 
            <div className="flex felx-col justify-center">
                <div className="text-center sm:w-[50%] justify-center px-5">
                    <p className="mb-3">
                        Wenn Sie Student an der Universität Regensburg sind und VP-Stunden benötigen, geben Sie hier Ihre Daten ein. Andernfalls können Sie die Seite schließen.
                    </p>
                    <div className="mb-3">
                        <p>Vorname:</p>
                        <FirstName />
                    </div>
                    <div className="mb-3">
                        <p>Nachname:</p>
                        <LastName />
                    </div>
                    <div className="mb-3">
                        <p>Studiengang:</p>
                        <DegreeProgramm />
                    </div>
                    <div className="mb-3">
                        <p>Martikel:</p>
                        <Martikel />
                    </div>
                    <SubmitVPButton />
                </div>
            </div>
            </>
        }    
        </>
    );
}