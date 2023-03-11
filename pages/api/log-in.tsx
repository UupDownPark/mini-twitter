import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log(db.user);
  }
}
