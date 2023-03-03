import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(JSON.parse(req.body));
    const { data } = JSON.parse(req.body);
    const { username, email } = data;
    await db.user.create({
      data: { name: username, email: email },
    });
  }

  res.status(200).json({
    ok: true,
    data: "xx",
  });
}
