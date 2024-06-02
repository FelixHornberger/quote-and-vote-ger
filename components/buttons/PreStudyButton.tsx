'use client'
import { useLikertscaleGradingStore } from '@/zustand/likertscale';
import Link from 'next/link';
import { useState } from 'react';
import UserFeedback from '../UserFeedback';
import { useQuizStore } from '@/zustand/quiz';
import { useTimeDataStore } from '@/zustand/time';

export default function PreStudyButton(){

    const [showUserFeedback, setVisbility] = useState(false);
    const { quizData } = useQuizStore();
    const {setTimeData} = useTimeDataStore();

    const handleClick = (e: React.MouseEvent) => {
        if (quizData['answer1'] !== '' && 
            quizData['answer2'] !== '' &&
            quizData['answer3'] !== '' &&
            quizData['answer4'] !== '' &&
            quizData['answer5'] !== ''
         ) { 
            setTimeData({preStudy: new Date().toLocaleTimeString()});
        } else {
          setVisbility(true);
          e.preventDefault();
        }
    }

    return (
        <div className='flex flex-col text-center justify-center'>
            {showUserFeedback && <UserFeedback feedbackText='Sie können nicht zur nächsten Seite wechseln, ohne alle Fragen beantwortet zu haben.' />}
            <Link href="/pre-task" passHref>
                <button className='bg-custom-accent p-2 font-semibold my-3' onClick={handleClick}>
                    Nächste Seite
                </button>
            </Link>
        </div>
    );
};