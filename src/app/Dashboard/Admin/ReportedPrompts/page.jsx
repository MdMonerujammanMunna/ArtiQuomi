import CardReport from "@/components/CardReport/CardPrport";
import { ReportPrompt } from "@/lib/api/Admin/Report";
export default async function ReportedPrompts() {
    const ReportData = await ReportPrompt();
    // console.log(ReportData);
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <CardReport ReportData={ReportData} />
            </div>


        </>
    );
}