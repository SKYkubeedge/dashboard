import { getInfo } from "@/api/devices";

export default async function handler(req, res) {
  const result = await getInfo(req.query.namespaces, req.query.name)

  res.status(200).json({
    data: result.data
  })
}