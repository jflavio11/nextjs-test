import { IncomingMessage, ServerResponse } from "http";
import Db from "@database";

const allAvos = async(req: IncomingMessage, res: ServerResponse) => {
    const db = new Db()
    const allProducts = await db.getAll()
    const length = allProducts.length
    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.end(JSON.stringify({
        "length": length,
        "data": allProducts
    }))
}

export default allAvos