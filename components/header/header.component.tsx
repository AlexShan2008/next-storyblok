import { useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import { useLocation } from "react-use";

import logo from "@assets/images/logo.svg";

import { HeaderWrapper } from "./header.styled";

export const Header = () => {
  const state = useLocation();

  const getClassName = useCallback(
    (path: string) => {
      return state.pathname === path ? "active" : undefined;
    },
    [state.pathname]
  );

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Image src={logo} className="logo" alt="logo" />
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
