import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { pathname } = request.nextUrl;
    console.log(session.user.role)
    if (!session) {
        return NextResponse.redirect(new URL('/LogIn', request.url))
    }
    if (pathname.startsWith('/Dashboard/User')) {
        if (session.user.role !== "User") {
            return NextResponse.redirect(new URL('/LogIn', request.url))
        }
    }
    if (pathname.startsWith('/Dashboard/Creator')) {
        if (session.user.role !== "Creator") {
            return NextResponse.redirect(new URL('/LogIn', request.url))
        }
    }
    if (pathname.startsWith('/Dashboard/Admin')) {
        if (session.user.role !== "Admin") {
            return NextResponse.redirect(new URL('/LogIn', request.url))
        }
    }
}

export const config = {
    matcher: ["/AllPrompts/AllData:path", "/Dashboard/User/:path*", "/Dashboard/Creator/:path*", "/Dashboard/Admin/:path*"],
}