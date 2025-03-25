export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  console.log("userId", userId);
  // In a real application, fetch the user from a database
  const user = { id: userId, name: "User " + userId };
  // const user = {};
  return Response.json({ user });
}

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const sortBy = searchParams.get("sortBy") || "id";

//   return Response.json({
//     message: `Fetching users with name: ${name}, sorted by: ${sortBy}`,
//   });
// }

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     // Validate data
//     if (!body.name) {
//       return Response.json({ error: "Name is required" }, { status: 400 });
//     }

//     // Process the data
//     return Response.json({
//       message: "Data received",
//       data: body,
//     });
//   } catch (error) {
//     return Response.json({ error: "Invalid JSON body" }, { status: 400 });
//   }
// }

// export async function GET() {
//   const data = { message: "Hello, world!" };

//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Cache-Control": "max-age=0, s-maxage=86400",
//     },
//   });
// }

// export async function GET() {
//   const users = [{ id: 1, name: "John" }];
//   return Response.json({ users });
// }

// POST /api/users - Create a new user
export async function POST(request: Request) {
  const data = await request.json();

  // Process the data (in a real app, you would save to a database)
  console.log("Creating user:", data);

  return Response.json(
    {
      message: "User created successfully",
      user: { id: 999, ...data },
    },
    { status: 201 }
  );
}

// DELETE /api/users - Delete a user
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Delete logic would go here

  return Response.json({
    message: `User ${id} deleted successfully`,
  });
}
