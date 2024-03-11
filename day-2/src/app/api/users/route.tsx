import { NextResponse } from "next/server";

export async function GET(request: Request) {
	return NextResponse.json({ data: "I am from server in api/users/" }, { status: 200 });
}

export async function POST(request: Request) {
	const body = await request.json();
	return NextResponse.json({ data: body, message: "I am from server post request in api/users/" }, { status: 200 });
}
