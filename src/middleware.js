import {getSession, getSessionFromRequest, updateSession} from "./lib";
import { NextResponse } from "next/server";

export async function middleware(request) {
	const pathname = request.nextUrl.pathname

	const session = await getSessionFromRequest(request)

	// redirect in case of attempt to BookAppointment without being logged in
	if (!session && pathname.startsWith('/BookAppointment')) {

		// redirect to login page
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	if (!session && pathname.startsWith('/BrowseAppointments')) {
		// redirect to login page
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	// refresh cookie expiry when don't get redirected (means session was not null)
	// put this down here and not at top to allow future changes of user type to also be adding to checking
	if (session)
		return await updateSession(request);

	// case if not signed in, but not accessing protected route, so just continue
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - images (local image files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|images).*)',
	],
}