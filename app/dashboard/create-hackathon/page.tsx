import { CreateHackathonOne } from '../../../components/create-hackathon-form';

export default function Page() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">
                Create a hackathon
            </h2>
            <CreateHackathonOne />
        </div>
    );
}