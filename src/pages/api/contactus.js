import {contactUs} from "@/pages/api/helpers/mail";

export default async function POST(req,res) {
  return res.status(200).json(await contactUs(req.body))
}