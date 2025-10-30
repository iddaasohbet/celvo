import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to base64 for database storage
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const mimeType = file.type;
    const fileName = `upload_${Date.now()}_${file.name}`;
    
    // Store in database as data URL
    const imageDataUrl = `data:${mimeType};base64,${base64}`;
    const imagePath = `/images/${fileName}`;

    const connection = await pool.getConnection();

    // Get max sort_order
    const [maxResult] = await connection.query(
      "SELECT MAX(sort_order) as max_order FROM products"
    );
    const maxOrder = (maxResult as any[])[0]?.max_order || 0;

    // Insert into products table
    await connection.query(
      `INSERT INTO products (image_path, name, category, sort_order) VALUES (?, ?, ?, ?)`,
      [imageDataUrl, 'Yeni Ürün', 'Tekstil', maxOrder + 1]
    );

    connection.release();

    return NextResponse.json({
      success: true,
      imagePath: imageDataUrl,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image: " + (error as Error).message },
      { status: 500 }
    );
  }
}

