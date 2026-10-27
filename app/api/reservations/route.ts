// This fictional portfolio preview has no live reservation service.
// Keep the former endpoint explicit without parsing or retaining guest details.
export async function GET() {
  return Response.json({ preview: true, reservations: [] }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST() {
  return Response.json({ preview: true, error: "Design preview only. No reservations are accepted. Discuss this website with Nolixia." }, { status: 409, headers: { "Cache-Control": "no-store" } });
}
