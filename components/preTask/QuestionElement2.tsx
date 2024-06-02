import PartySelector from "../PartySelector";

export default function QuestionElement({ question }: { question: string }) {
    return (
        <div className="flex flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center sm:text-left justify-center sm:justify-normal mb-3">
                <h2>{question}</h2>
            </div>
            <PartySelector></PartySelector>
            <p className="text-base pt-2.5 sm:pt-1">Die Partei Identität und Demokratie (ID) ist nicht in der Liste enthalten, da sie sich nicht auf ein Wahlprogramm für diese Wahlen einigen konnte.</p>
        </div>
    );
}