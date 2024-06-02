'use client'
import { usePartyStore } from "@/zustand/party";

export default function PartySlected() {

    const {party} = usePartyStore();

    return (
            <h2 className='py-2 pr-2.5'>Ausgewählte Partei: {party} </h2>
    );
}