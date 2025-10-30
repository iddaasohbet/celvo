import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type) {
    return NextResponse.json({ error: "Type is required" }, { status: 400 });
  }

  try {
    const connection = await pool.getConnection();

    let data: any = {};

    if (type === "hero") {
      const [rows] = await connection.query("SELECT * FROM hero_content LIMIT 1");
      const hero: any = (rows as any[])[0];
      data = {
        badge: hero.badge,
        title: hero.title,
        description: hero.description,
        trustIndicators: {
          customers: hero.trust_customers,
          customersLabel: hero.trust_customers_label,
          quality: hero.trust_quality,
          qualityLabel: hero.trust_quality_label,
        },
      };
    } else if (type === "about") {
      const [aboutRows] = await connection.query("SELECT * FROM about_content LIMIT 1");
      const about: any = (aboutRows as any[])[0];
      const [valuesRows] = await connection.query("SELECT * FROM core_values ORDER BY sort_order");
      
      data = {
        title: about.title,
        slogan: about.slogan,
        brandName: about.brand_name,
        origin: {
          title: about.origin_title,
          content: about.origin_content,
        },
        philosophy: {
          title: about.philosophy_title,
          paragraphs: [about.philosophy_paragraph1, about.philosophy_paragraph2],
        },
        target: {
          title: about.target_title,
          content: about.target_content,
          subtitle: about.target_subtitle,
        },
        values: (valuesRows as any[]).map((v) => ({
          icon: v.icon,
          title: v.title,
          description: v.description,
        })),
      };
    } else if (type === "products") {
      const [rows] = await connection.query(
        "SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order"
      );
      data = {
        products: (rows as any[]).map((p) => ({
          id: p.id,
          image: p.image_path,
          name: p.name,
          category: p.category,
        })),
      };
    } else if (type === "contact") {
      const [rows] = await connection.query("SELECT * FROM contact_info LIMIT 1");
      const contact: any = (rows as any[])[0];
      data = {
        title: contact.page_title,
        subtitle: contact.page_subtitle,
        owner: contact.owner_name,
        phone: contact.phone_display,
        phoneLink: contact.phone_link,
        email: contact.email,
        address: contact.address,
        formTitle: contact.form_title,
        formSubtitle: contact.form_subtitle,
      };
    } else if (type === "settings") {
      const [siteRows] = await connection.query("SELECT * FROM site_settings LIMIT 1");
      const [adminRows] = await connection.query("SELECT * FROM admin_users WHERE username = 'admin' LIMIT 1");
      const site: any = (siteRows as any[])[0];
      const admin: any = (adminRows as any[])[0];
      
      data = {
        site: {
          name: site.site_name,
          tagline: site.tagline,
          slogan: site.slogan,
          description: site.description,
        },
        admin: {
          username: admin.username,
          password: admin.password_hash,
        },
      };
    }

    connection.release();
    return NextResponse.json(data);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json(
      { error: "Failed to read content from database" },
      { status: 500 }
    );
  }
}

