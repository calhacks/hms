import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-24 border-t flex justify-center items-center bg-white">
      <a
        className="flex justify-center items-center"
        href="https://yourdomain.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with {"<3"} by Hackathons @ Berkeley
        {/* <img src="/your-logo.svg" alt="Your Logo" className="h-4 ml-2" /> */}
      </a>
    </footer>
  );
}
