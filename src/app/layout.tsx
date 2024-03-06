import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { IoLanguage } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Logo from "/public/images/logo.png";
import Link from "next/link";
import NavbarDropdown from "@/components/NavbarDropdown";
import Image from "next/image";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Daizer",
  description: "Layout Editor for DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={notoSansKr.className}>
        <section className="text-[0.95em] desktoplg:text-[1.1em] desktopxl:text-[1.5em]">
          <div className="navbar  absolute left-0 top-0 z-[9999] bg-opacity-10 backdrop-blur-md backdrop-saturate-150 max-w-[99%] border-b-2 border-slate-900/10">
            <div className="flex-none">
              <NavbarDropdown />
            </div>
            <div className="flex-1 items-center">
              <Link href="/main" className="btn btn-ghost text-xl font-extrabold text-[#394e6b]">
                <Image src={Logo} alt="logo" width={30} />
                Daizer
              </Link>
              <div className="badge badge-md tracking-widest bg-base-200">0.0.1</div>
            </div>
            <div className="flex items-center space-x-3 p-2">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center">
                  <IoLanguage size={23} />
                  <FaChevronDown size={10} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>English</a>
                  </li>
                  {/* <li>
                    <a>한국어</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <article>{children}</article>
        </section>
      </body>
    </html>
  );
}
