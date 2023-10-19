import { getList } from "@/api/secret";

export default async function handler(req, res) {
  const result = await getList(req.query.namespaces)

  res.status(200).json({
    data: result.data
  })
}