import Database from "@database";
import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const ProductInfo = async (req: NextApiRequest, res: NextApiResponse) => {
    const prodId = req.query.productId
    const db = new Database()
    const prod = await db.getById(prodId as string)
    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.end(JSON.stringify({
        "data": prod
    }))
}

export default ProductInfo