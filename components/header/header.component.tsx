import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "@assets/images/logo.svg";

import { HeaderWrapper } from "./header.styled";

export const Header = () => {
  const router = useRouter();

  const getClassName = (path: string) => {
    return router.asPath === path ? "active" : undefined;
  };

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Image src={logo} width={60} height={60} alt="logo" />
          </li>
          <li className={getClassName("/home")}>
            <Link href="/home">Home</Link>
          </li>
          <li className={getClassName("/about")}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
