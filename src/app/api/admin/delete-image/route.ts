import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { imagePath } = await request.json();

    if (!imagePath) {
      return NextResponse.json(
        { error: "Resim yolu gerekli" },
        { status: 400 }
      );
    }

    // Remove leading slash if exists
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    const filePath = path.join(process.cwd(), "public", cleanPath);
    
    console.log("Deleting file:", filePath);

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log("File deleted successfully");
        return NextResponse.json({ success: true, message: "Resim silindi" });
      } catch (unlinkError) {
        console.error("Unlink error:", unlinkError);
        return NextResponse.json(
          { error: "Dosya silinirken hata oluştu" },
          { status: 500 }
        );
      }
    } else {
      console.log("File not found:", filePath);
      return NextResponse.json(
        { error: "Resim bulunamadı: " + filePath },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Delete image error:", error);
    return NextResponse.json(
      { error: "Resim silinemedi: " + (error as Error).message },
      { status: 500 }
    );
  }
}

