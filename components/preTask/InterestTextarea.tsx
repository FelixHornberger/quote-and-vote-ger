'use client'

import { useInterestStore } from "@/zustand/interest";

export default function InterestTextarea() {

    const {interest, setInterest} = useInterestStore();

    return(
        <div className="w-full">
            <textarea className="w-full bg-transparent border-neutral-900 border-2 focus:outline-none focus:border-[3px] shadow-xl focus:ring-0 rounded-lg h-32 mt-3"
                value={interest}
                placeholder="Geben Sie eine Nachricht ein ..."
                id="message-input"
                onChange={(e) => setInterest(e.currentTarget.value)} 
            />
      </div>
    )
} 