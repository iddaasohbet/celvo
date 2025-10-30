import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type) {
    return NextResponse.json({ error: "Type is required" }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), "data", `${type}.json`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}

