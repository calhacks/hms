export default function Header() {
    return (
        <footer className="w-full h-24 border-t flex justify-center items-center bg-white">
            <a
            className="flex justify-center items-center"
            href="https://yourdomain.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by {' '}
            <img src="/your-logo.svg" alt="Your Logo" className="h-4 ml-2" />
            </a>s
        </footer>
    );
}