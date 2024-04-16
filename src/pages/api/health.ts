import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({ status: "The Header is up and running! Give it a try 1" });
}
