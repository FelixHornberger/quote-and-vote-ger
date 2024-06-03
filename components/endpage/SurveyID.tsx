'use client'

import { useIDStore } from "@/zustand/surveyID";

export default function SurveyID() {

    const { surveyID } = useIDStore();

    return(
        <p>Ihre Umfrage-ID lautet: { surveyID }</p>
    )
}