import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // 여기에 인증 로직을 추가하세요. (예: 데이터베이스 조회)
    // 이 예제에서는 단순히 성공으로 처리합니다.
    if (email === "test@example.com" && password === "password") {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
