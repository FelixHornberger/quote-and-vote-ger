'use client'

import { useMessageStore } from "@/zustand/message";
import { useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatHistory() {
    const { messages } = useMessageStore();
    const chatMessagesRef = useRef<null | HTMLDivElement>(null); 

    // The scroll Function comes from the following post of stackoverflow:
    // https://stackoverflow.com/a/52266212
    const scrollToBottom = () => {
        chatMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    // TODO: ADD margin to first message

    return(
        <div className="flex w-full sm:w-[70%] p-2 h-full sm:border sm:border-b-0 border-custom-text m-auto overflow-hidden self-center w-128 mt-[40px] sm:mt-[20px]">
            <div className="w-full h-full">
                <div className="overflow-y-scroll overflow-x-hidden p-2.5  break-words" id="chat-messages">
                    <Message key={-1} id={-1} role={"Assistant"} message={"Hallo, ich bin ein KI-System, das Ihnen dabei helfen soll, sich über das Parteiprogramm zu informieren. Sie können mir so viele Fragen zum Parteiprogramm stellen, wie Sie möchten, und ich werde sie für Sie beantworten."}/>
                    {messages.map((message) => (
                        <Message key={message.id} id={message.id} role={message.role} message={message.content} />
                    ))}
                    <div ref={chatMessagesRef} />
                </div>
            </div>
        </div>
    );
}