import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.user.create({
    data: { name: "" },
  });
  res.json({
    ok: true,
    data: "xx",
  });
}
