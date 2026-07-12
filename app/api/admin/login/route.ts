import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "Natuwa@123";

  // Debug Logs
  console.log("Username Entered:", username);
  console.log("Password Entered:", password);

  console.log("Username Match:", username === ADMIN_USERNAME);
  console.log("Password Match:", password === ADMIN_PASSWORD);

  if (
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin-auth", "loggedin", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid Username or Password",
    },
    { status: 401 }
  );
}
