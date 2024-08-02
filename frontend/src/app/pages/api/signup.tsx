import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // 여기에 사용자 생성 로직을 추가하세요. (예: 데이터베이스에 저장)
    // 이 예제에서는 단순히 성공으로 처리합니다.
    res.status(200).json({ message: "Signup successful" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
