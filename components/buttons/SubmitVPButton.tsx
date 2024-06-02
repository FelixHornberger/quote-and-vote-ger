'use client'
import { useDegreeProgrammStore } from "@/zustand/degreeprogramm";
import { useFirstNameStore } from "@/zustand/firstname";
import { useLastNameStore } from "@/zustand/lastname";
import { useMatrikelStore } from "@/zustand/matrikel";
import { useVPStore } from "@/zustand/vp";
import UserFeedback from "../UserFeedback";
import { useState } from "react";


export default function SubmitVPButton() {

    const { setVP } = useVPStore();

    const { matrikel } = useMatrikelStore();
    const { firstName } = useFirstNameStore();
    const { lastName } = useLastNameStore();
    const { degreeProgramm } = useDegreeProgrammStore();

    const [showUserFeedback, setVisbility] = useState(false);

    const handleclick = () => {
        if (matrikel !== '' &&
            firstName !== '' &&
            lastName !== '' &&
            degreeProgramm !== '') {
            setVP(false);

            const submitData = async () => {
                const response = await fetch('/api/submitStudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "matrikel": matrikel,
                        "firstname": firstName,
                        "lastname": lastName,
                        "degreeProgramm": degreeProgramm,
                        "time": new Date().toDateString()
                    }),
                });
            }
            submitData();
        } else {
            setVisbility(true);
        }
    }
    return (
        <>
            {showUserFeedback && <UserFeedback feedbackText='Damit die VP-Stunden gutgeschrieben werden können, benötigen ich alle Daten!' />}
            <button className='bg-custom-accent p-2 font-semibold my-3' onClick={() => handleclick()}>Einreichen der VP</button>
        </>
    );
};