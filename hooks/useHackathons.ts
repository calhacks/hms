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

    return {
        hackathons,
        getHackathons,
        insertHackathon,
    };
}