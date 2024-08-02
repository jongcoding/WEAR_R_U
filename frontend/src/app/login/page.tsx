"use client"; // 이 파일을 클라이언트 컴포넌트로 지정

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // next/navigation에서 useRouter 가져오기

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.error("Login failed");
    }
  };

  const isFormValid = email && password; // 모든 입력 필드가 채워졌는지 확인

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-96 gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={!isFormValid} // 모든 입력 필드가 채워지지 않으면 버튼 비활성화
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
