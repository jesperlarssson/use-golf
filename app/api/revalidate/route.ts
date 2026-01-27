import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // Validera secret token för säkerhet
    const secret = req.nextUrl.searchParams.get("secret");
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { _type, slug } = body;

    if (!_type) {
      return NextResponse.json(
        { message: "Missing _type" },
        { status: 400 }
      );
    }

    // Revalidera baserat på dokumenttyp
    switch (_type) {
      case "post":
        // Revalidera journal-sidor
        revalidatePath("/journal");
        if (slug) {
          revalidatePath(`/journal/${slug}`);
        }
        // Revalidera startsidan som visar senaste posts
        revalidatePath("/");
        break;

      case "event":
        // Revalidera events-sidor
        revalidatePath("/events");
        revalidatePath("/events/veckoscramble");
        revalidatePath("/events/juniorligan");
        revalidatePath("/events/seniorgolf");
        revalidatePath("/bokning/boka-lokalen");
        revalidatePath("/bokning/staende-tid");
        // Revalidera startsidan som visar events
        revalidatePath("/");
        break;

      case "pricing":
        // Revalidera sidor som använder pricing-data
        revalidatePath("/bokning/staende-tid");
        revalidatePath("/medlemsvillkor");
        revalidatePath("/bokning");
        revalidatePath("/medlemskap");
        break;

      case "userPass":
        // Revalidera sidor som använder user pass-data
        revalidatePath("/medlemsvillkor");
        revalidatePath("/medlemskap");
        revalidatePath("/");
        break;

      case "venueBooking":
        // Revalidera sidor som använder venue booking-data
        revalidatePath("/bokning/boka-lokalen");
        break;

      case "closure":
        // Revalidera sidor som använder closure-data
        revalidatePath("/bokning/staende-tid");
        revalidatePath("/bokning");
        break;

      case "faq":
        // Revalidera startsidan som visar FAQ
        revalidatePath("/");
        break;

      default:
        // För okända typer, revalidera startsidan som säkerhetsåtgärd
        revalidatePath("/");
    }

    // Revalidera även via cache-taggar om de används
    revalidateTag("sanity", "max");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      _type,
      slug,
    });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
