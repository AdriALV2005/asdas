//app\meeting\edit\[id]\page.tsx
import { notFound } from "next/navigation";
import UpdateForm from "../../../../../components/editformReu";
import { getMettingById } from "../../../../../lib/actionReunion";

const UpdateMeetingPage = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const meeting = await getMettingById(id);

    if (!meeting) {
        notFound();
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Meeting</h1>
            <UpdateForm meeting={meeting} />
        </div>
    );
};

export default UpdateMeetingPage;