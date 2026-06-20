import ReviewSection from "@/components/Review/Reviews";
import SingleCard from "@/components/SingleDataCard/SingleCard";
import { getPromptById } from "@/lib/api/Prompts";
import { getReviewsByPathId } from "@/lib/api/Reviews";

export default async function SinglePrompt({ params }) {
    const paramso = await params;
    const id = paramso.id;
    const result = await getPromptById(id);
    const reviews = await getReviewsByPathId(id);
    return (
        <>
            <SingleCard result={result} />
            <ReviewSection id={id} reviews={reviews} />
        </>
    );
}