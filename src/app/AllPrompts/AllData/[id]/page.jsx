import SingleCard from "@/components/SingleDataCard/SingleCard";
import { getPromptById } from "@/lib/api/Prompts";
import { auth } from "@/lib/auth";


export default async function SinglePrompt({ params }) {
    const paramso = await params;
    const id = paramso.id;
    const result = await getPromptById(id);

    return (
        <>
            <SingleCard result={result} />
        </>
    );
}