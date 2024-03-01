export default function Header() {
    return (
    <header className="w-full py-5 flex justify-between items-center px-10 bg-background-gray shadow">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-6 mr-2" />
          <span className="font-medium text-xl">Logo</span>
        </div>
        <a
          href="#"
          className="font-medium text-base hover:text-blue-500 transition-colors"
        >
          Sign In
        </a>
      </header>
    );
}
