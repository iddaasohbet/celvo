import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/images
    const fileName = file.name;
    const filePath = path.join(process.cwd(), "public", "images", fileName);
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      imagePath: `/images/${fileName}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

