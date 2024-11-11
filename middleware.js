import { NextResponse } from "next/server";
import { withMiddlewareAuthRequired, getSession,getAccessToken  } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async (req) => {
  const res = NextResponse.next();

  const user = await getSession(req, res);
  const { accessToken } = await getAccessToken(req, res);
  if (!user) {

    return NextResponse.redirect("/api/auth/login");
  }

  return res;
});

export const config = {
  matcher: "/profile",
  matcher: "/",
};