import { HackathonForm } from '../../../../components/create-hackathon-form';
import { supabase } from '@/lib/supabase';

export const getHackathon = async (id: String) => {
    const { data, error} = await supabase
    .from('Hackathons')
    .select('*')
    .match({ id: id });
    console.log(data)

    return data[0]
}

export default async function Page({ params }: { params: { hackathon: string } }) {
  const hackathon = await getHackathon(params.hackathon)
  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <h2 className="text-3xl font-bold tracking-tight">
              Update this hackathon
          </h2>
          <HackathonForm hackathonId={params.hackathon} hackathon={hackathon} />
      </div>
  );
}