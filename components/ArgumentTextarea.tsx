'use client'

import { useArgumentStore } from "@/zustand/argument"

export default function ArgumenTextarea() {

    const {setArgument} = useArgumentStore();
    const {argument} = useArgumentStore();

    return(
        <div className="w-full">
            <textarea className="w-full bg-transparent border-neutral-900 border-2 focus:outline-none focus:border-[3px] shadow-xl focus:ring-0 rounded-lg h-32 mt-3"
        value={argument}
        placeholder="Geben Sie eine Nachricht ein ..."
        id="message-input"
        onChange={(e) => setArgument(e.currentTarget.value)} />
      </div>
    )
} 