type Reservation = {
  reference: string;
  spaceId: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  occasion?: string;
};

const state = globalThis as typeof globalThis & {
  emberOliveReservations?: Reservation[];
};

const reservations =
  state.emberOliveReservations ?? (state.emberOliveReservations = []);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const date = url.searchParams.get("date");
  const time = url.searchParams.get("time");

  return Response.json({
    reservations: reservations
      .filter((item) => item.date === date && item.time === time)
      .map(({ spaceId, date: bookingDate, time: bookingTime }) => ({
        spaceId,
        date: bookingDate,
        time: bookingTime,
      })),
  });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<Reservation>;
  const required: Array<keyof Reservation> = [
    "spaceId",
    "date",
    "time",
    "guests",
    "name",
    "email",
    "phone",
  ];

  for (const field of required) {
    if (!payload[field]) {
      return Response.json({ error: `${field} is required` }, { status: 400 });
    }
  }

  const alreadyBooked = reservations.some(
    (item) =>
      item.spaceId === payload.spaceId &&
      item.date === payload.date &&
      item.time === payload.time,
  );

  if (alreadyBooked) {
    return Response.json(
      { error: "This table is no longer available for that time." },
      { status: 409 },
    );
  }

  const reference = `EO-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  reservations.push({ ...payload, reference } as Reservation);

  return Response.json({ reference }, { status: 201 });
}
