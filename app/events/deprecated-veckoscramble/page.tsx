import { redirect } from "next/navigation";

// Dessa aktiviteter flyttas till Alba; visa aktuellt tills flödet är fastställt.
export default function RetiredActivityPage() {
  redirect("/events");
}
