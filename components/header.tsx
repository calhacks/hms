'use client'

import { signIn, signOut } from "next-auth/react";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import GoogleButton from "./SignInWithGoogle";
import Link from "next/link";

type Props = {
  loggedIn: boolean;
}

export default function Header(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailFieldError, setEmailFieldError] = useState<boolean>(false);
  const [passwordFieldError, setPasswordFieldError] = useState<boolean>(false);

  const inputBaseState = "border text-sm rounded-lg block w-full p-2.5";
  const validInputAddOnState = " focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-gray-900 bg-gray-50";
  const invalidInputAddOnState = " bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500";
  
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const validateEmail = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = email.replace(/\s/g, '') !== "" && pattern.test(email);
    setEmailFieldError(!valid);
    return valid;
  };

  const validatePassword = () => {
    const valid = password.replace(/\s/g, '') !== "";
    setPasswordFieldError(!valid);
    return valid;
  };

  const handleSubmit = () => {
    const allValid = validateEmail() && validatePassword();
    if (allValid) {
      signIn("credentials", {redirect: false, password: password});
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <header className="w-full py-5 flex justify-between items-center px-10 bg-background-gray shadow">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-6 mr-2" />
          <span className="font-medium text-xl">Logo</span>
        </div>

        <Link href="" onClick={props.loggedIn ? () => signOut: openModal}>
          <p className="font-medium text-base hover:text-blue-500 transition-colors">
            {props.loggedIn ? "Sign out": "Sign in"}
          </p>
        </Link>
        
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold text-gray-900 relative text-center">
                    {"Sign in"}
                    <button type="button" onClick={closeModal} className="absolute end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </Dialog.Title>
                  <div className="p-4 md:p-5">
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} onBlur={validateEmail} className={inputBaseState + (emailFieldError ? invalidInputAddOnState: validInputAddOnState)} placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} onBlur={validatePassword} placeholder="••••••••" className={inputBaseState + (passwordFieldError ? invalidInputAddOnState: validInputAddOnState)} />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-700 hover:underline">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                        <GoogleButton onClick={() => signIn('google', { callbackUrl: window.location.href })}/>
                        <div className="text-sm font-medium text-gray-500">
                            Not registered? <a href="#" className="text-blue-700 hover:underline">Create account</a>
                        </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
