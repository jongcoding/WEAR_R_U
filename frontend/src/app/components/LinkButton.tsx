"use client"; // 이 파일을 클라이언트 컴포넌트로 지정

import React from "react";
import { useRouter } from "next/navigation";

// Props 타입 정의
interface LinkButtonProps {
  link: string; // 링크 주소를 받을 props
  title: string; // 버튼 제목
  onClick: (page: string) => void; // 페이지 변경 이벤트 핸들러
  active: boolean; // 현재 활성화된 버튼인지 여부
}

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  title,
  onClick,
  active,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick(title); // 부모 컴포넌트에 페이지 변경 알림
    router.push(link); // 해당 페이지로 이동
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md transition-transform duration-300 ${
        active ? "bg-blue-600 text-white" : "bg-transparent text-white"
      }`}
    >
      {title}
    </button>
  );
};

export default LinkButton;
