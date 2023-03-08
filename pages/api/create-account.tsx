import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(JSON.parse(req.body));
    const { data } = JSON.parse(req.body);
    const { username, email, password } = data;
    const check = await db.user.findFirst({
      where: { name: username, email: email, password: password },
    });
    if (check !== undefined) {
      await db.user.create({
        data: { name: username, email: email, password: password },
      });
      res.status(200).json({
        ok: true,
        data: "계정생성완료",
      });
      if (check) {
        res.status(200).json({
          ok: false,
          data: "같은 계정이 있습니다.",
        });
      }
    }
  }
}
