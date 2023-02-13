import { NextApiRequest, NextApiResponse } from "next/types";
import connect from "../lib/mongodb";

connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  const user = ""; //await User.findOne({ email, password });

  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    res.redirect("/home");
  }
}
