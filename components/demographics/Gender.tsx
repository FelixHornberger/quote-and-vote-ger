'use client'
import { useGenderStore } from "@/zustand/gender";

// When you optimize this you could probalby use one Selct Input for both gender and occupation but what do i know :()
export default function Gender() {
    const setGender = useGenderStore((state) => state.setGender)
    return (
        <select id="gender" className="h-6 w-full border border-custom-text bg-transparent focus:border-[2px] focus:outline-none"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected>
                Wählen Sie eine Option aus
            </option>
            <option id="female">Weiblich</option>
            <option id="male">Männlich</option>
            <option id="divers">Divers</option>
            <option id="none">Ich möchte keine Angaben machen</option>
        </select>
    );
}