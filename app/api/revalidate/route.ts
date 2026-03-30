import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (authHeader !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
      return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json();

    const model = body.model || body.uid || "unknown";

    // 🔥 match your fetch tags
    const tag = `strapi-${model}`;

    revalidateTag(tag, "max");

    return NextResponse.json({ revalidated: true, tag });
  } catch (err) {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
