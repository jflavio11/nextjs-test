import Database from "@database";
import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const ProductInfo = async (req: NextApiRequest, res: NextApiResponse) => {
    const prodId = req.query.productId
    const db = new Database()
    const prod = await db.getById(prodId as string)
    res.setHeader("Content-type", "application/json")
    res.status(200).json({
        prod
    })
}

export default ProductInfo