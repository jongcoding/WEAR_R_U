// app/layout.tsx
"use client";

import "../styles/globals.css"; // 전역 스타일을 포함합니다.
import type { ReactNode } from "react";
import LinkButton from "./components/LinkButton";
import React, { useEffect, useState } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setBackground({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 배경색 계산
  const bgStyle = {
    background: `radial-gradient(
      circle at ${background.x * 100}% ${background.y * 100}%,
      rgba(255, 255, 255, 1),
      rgba(0, 0, 0, 0.6) 15%,
      rgba(0, 0, 0, 1) 50%
    )`,
  };

  // 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <html lang="en">
      <head className="items-center">
        <title>WEAR R U</title>
      </head>
      <body style={bgStyle}>
        <header className="py-16 text-xl">
          <h1 className="text-center m-8 text-3xl">WEAR R U</h1>
          <nav>
            <ul className="flex justify-center gap-x-16">
              <li>
                <LinkButton
                  link="/"
                  title="Home"
                  onClick={handlePageChange}
                  active={currentPage === "Home"}
                />
              </li>
              <li>
                <LinkButton
                  link="/login"
                  title="Login"
                  onClick={handlePageChange}
                  active={currentPage === "Login"}
                />
              </li>
              <li>
                <LinkButton
                  link="/signup"
                  title="SignUp"
                  onClick={handlePageChange}
                  active={currentPage === "SignUp"}
                />
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">
          {children} {/* 각 페이지의 내용이 이 위치에 렌더링됩니다. */}
        </main>
        <footer className="flex justify-center p-4">
          <p>&copy; 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
