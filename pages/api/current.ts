import {NextApiRequest, NextApiResponse} from "next";
import serverAuth from "@/lib/serverAuth";

const handler = async (req: NextApiRequest, resp: NextApiResponse) => {
  try {
    if (req.method !== 'GET') {
      return resp.status(405).end();
    }

    const {currentUser} = await serverAuth(req)

    return resp.status(200).json(currentUser)
  } catch (error) {
    console.log(error)
    return resp.status(500).end()
  }
}

export default handler
