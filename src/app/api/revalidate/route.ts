import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
// import { Post } from "types"

export const runtime = "edge"

// type Data = {
//   contents: Post[]
// }

export async function POST() {
  // const res = await request.json()

  // const res = await fetch(
  //   "https://finance-blog.microcms.io/api/v1/blogs?limit=999",
  //   {
  //     headers: {
  //       "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
  //     },
  //   }
  // )
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }
  // const data: Data = await res.json()
  revalidatePath("/")
  return NextResponse.json({ revalidated: true })
}
