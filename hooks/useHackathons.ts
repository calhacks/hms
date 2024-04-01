import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export const useHackathons = () => {
    const [hackathons, setHackathons] = useState<any[]>([]);
    const getHackathons = async () => {
        const { data, error} = await supabase
        .from('Hackathons')
        .select('*');

        if (data) {
            setHackathons(data);
        }
    }

    const insertHackathon = async (hackathon: any) => {
        const { data, error } = await supabase
          .from('Hackathons')
          .insert([hackathon])
          .single();
    
        if (error) {
          console.error('Error inserting hackathon:', error);
        } else {
          console.log('Hackathon inserted successfully:', data);
          setHackathons([...hackathons, data]);
        }
      }

    const updateHackathon = async (hackathon: any) => {
        const { data, error } = await supabase
          .from('Hackathons')
          .update(hackathon)
          .match({ id: hackathon.id });
    
        if (error) {
          console.error('Error updating hackathon:', error);
        } else {
          console.log('Hackathon updated successfully:', data);
          setHackathons(hackathons.map(h => h.id === data[0].id ? data[0] : h));
        }
      }

    return {
        hackathons,
        getHackathons,
        insertHackathon,
    };
}