'use client';
import { useDegreeProgrammStore } from "@/zustand/degreeprogramm";

export default function DegreeProgramm() {
    const setDegreeProgramm = useDegreeProgrammStore((state) => state.setDegreeProgramm)
    return (
        <input
            id="degreeProgramm"
            className="h-6 w-full border border-custom-text"
            type="text"
            placeholder="Bsp. Informationswissenschaft"
            onChange={(e) => setDegreeProgramm(e.target.value)}
        ></input>
    );
}