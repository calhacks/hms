'use client'

import { signIn, signOut } from 'next-auth/react';

export const LoginBtn = () => (
    <button className="text-xl bg-background-gray hover:bg-gray-400 px-5 py-3 transition-colors" onClick={() => signIn()}>Sign in</button>
);

export const LogoutBtn = () => (
    <button className="text-xl bg-background-gray hover:bg-gray-400 px-5 py-3 transition-colors" onClick={() => signOut()}>Sign Out</button>
);
