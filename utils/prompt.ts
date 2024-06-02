//TODO: Insert party manifest

interface Message {
    id: number;
    user: string;
    content: string;
    timestamp: string;
}

const getManifesto = async (party_name: string) => {
    const response = await fetch('/api/getManifestos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            party_name,
        }),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.text();
    if (!data) {
        return "Error! Only answer the user that the system got broken and he should contact the admin!";
    }
    return data;
}

export async function generatePrompt(party_name: string, condition: boolean) {
    let prompt = `Du bist ein generatives KI-Modell, das die Aufgabe hat, den Nutzer über das Wahlprogramm der Partei für die EU-Wahlen 2024 zu informieren. 
                    Die Partei ist ${party_name}. 
                    Das Parteiprogramm ist:\n`;
    const manifesto = await getManifesto(party_name);
    prompt += manifesto;
    return prompt;
}