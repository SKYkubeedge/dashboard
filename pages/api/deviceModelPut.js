import { putItem } from "@/api/deviceModels"

export default async function handler(req, res) {
  try {
    const result = await putItem(req.query.namespaces, JSON.parse(req.body), req.query.name)
    res.status(200).json({
      data: {
        ...result.data,
        status: 'Success'
      }
    })
  } catch (error) {
    res.status(200).json({
      data: {
        status: 'error',
        msg: error.message
      }
    })
  }

}