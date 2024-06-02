'use client'

import { usePartyStore } from "@/zustand/party";
import UserFeedback from "../UserFeedback";
import { useState } from "react";
import Link from "next/link";
import { useVoteStore } from "@/zustand/vote";
import { useTimeDataStore } from "@/zustand/time";

export default function PreTaskButton() {

  const [showUserFeedback, setVisbility] = useState(false);
  
  const { party } = usePartyStore();
  const {setTimeData} = useTimeDataStore();

  const handleClick = async (e: React.MouseEvent) => {
      if (party !== '') {
        setTimeData({preTask: new Date().toLocaleTimeString()});
      } else {
        setVisbility(true);
        e.preventDefault();
      }
  }

  // TODO: Better feedbacktext

  return (
      <div className='flex felx-col justify-center items-center text-center mb-3'>
        <div>
          {showUserFeedback && <UserFeedback feedbackText='Sie können nicht zur nächsten Seite wechseln, ohne eine Partei ausgewählt zu haben.' />}
          <Link href='/task-des'>
            <button onClick={handleClick} className="bg-custom-accent p-2 font-semibold mt-3">
              Nächste Seite
            </button>
          </Link>
        </div>
      </div>
  )
}
