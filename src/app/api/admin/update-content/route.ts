import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { type, data } = await request.json();

    if (!type || !data) {
      return NextResponse.json(
        { error: "Type and data are required" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", `${type}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Content updated" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}

