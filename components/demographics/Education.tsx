'use client';
import { useLevelOfEducationStore } from "@/zustand/education";

export default function Education() {

    const setLevelOfEducation = useLevelOfEducationStore((state) => state.setlevelOfEducation)

    return (
        <select id="highest-level-of-education" className="h-6 w-full border border-custom-text bg-transparent focus:border-[2px] focus:outline-none"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => setLevelOfEducation(e.target.value)}>
            <option disabled selected>
                Wählen Sie eine Option aus
            </option>
            <option id="placeholder">Kein Schulabschluss</option>
            <option id="placeholder">Hauptschule</option>
            <option id="placeholder">Realschule</option>
            <option id="placeholder">Abitur</option>
            <option id="placeholder">Bachelor</option>
            <option id="placeholder">Master</option>
            <option id="placeholder">Doktor</option>
            <option id="none">Ich möchte keine Angaben machen</option>
        </select>);
}