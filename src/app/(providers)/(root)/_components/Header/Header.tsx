import Link from "next/link";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>

      <nav className="ml-20">
        <ul className="text-[15px] font-medium">
          <li>
            <Link href={"/brands"}>BRANDS</Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto">
        <Link
          href="/sign-up"
          className="text-[15px] font-medium text-gray-800 hover:text-black transition"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}

export default Header;
