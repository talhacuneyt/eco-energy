import { NextApiRequest, NextApiResponse } from "next";

import connect from "../lib/mongodb";
import User from "../models/schema";

connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ code?: string; status?: string }>
) {
  try {
    const user = await User.create(req.body);

    res.redirect("/");

    if (!user) {
      return res.json({ code: "User not created" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to create a new user." });
  }
}
