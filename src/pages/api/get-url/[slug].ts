import { NextApiRequest, NextApiRespons } from "next"

import { prisma } from "../../../db/client"


export default async (req: NextApiRequest, res: NextApiRespons) => {

    const slug = req.query["slug"]

    if(!slug || typeof slug !== "string" ) {
        res.statusCode = 404

        res.send(JSON.stringify({ message: "please use URL with a slug"}))

        return
    }

    const data = await prisma.ShortLink.findFirst({
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    if (!data) {
        res.statusCode = 404

        res.send(JSON.stringify({ message: "slug not found"}))

        return
    }
    //By returning the data as a JSON blob here, 
    //the redirect can be done at the aedge
    return res.json(data)
}