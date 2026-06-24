import ReviewSection from "@/components/Review/Reviews";
import SingleCard from "@/components/SingleDataCard/SingleCard";
import { getPromptById } from "@/lib/api/Prompts";
import { getReviewsByPathId } from "@/lib/api/Reviews";

export default async function SinglePrompt({ params }) {
    const paramso = await params;
    const id = paramso.id;
    // console.log(id);
    const result = await getPromptById(id);
    const reviews = await getReviewsByPathId(id);
    const ProUser = result.visibility;
    // console.log(ProUser);
    return (
        <>
            <SingleCard id={id} result={result} ProUser={ProUser} />
            <ReviewSection id={id} reviews={reviews} ProUser={ProUser} />
        </>
    );
}