import { supabase } from "@/lib/supabase";

export const useSupabase = () => {
    const getSession = async () => {
        const {
            data: {
                session
            }
        } = await supabase.auth.getSession();

        const { access_token, refresh_token }: any = session;
        console.log(session);
        await setSession(access_token, refresh_token);
        return session;
    };

    const refreshSession = async () => {
        const {
            data: {
                session
            }
        } = await supabase.auth.refreshSession();
        return session;
    }

    const setSession = async (access_token: string, refresh_token: string) => {
        const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token
        });
        if (error) {
            console.error(error);
        }
        return true;
    }

    return {
        getSession,
        refreshSession,
        setSession
    }
}