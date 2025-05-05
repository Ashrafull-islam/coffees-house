import { NextRequest, NextResponse } from "next/server";
import connectionToDatabase from "@/lib/dbConnect";
import User from "@/modals/User";

// GET /api/product/:id
export async function GET(request: NextRequest) {
  try {
    await connectionToDatabase();

    const id = request.nextUrl.pathname.split('/').pop(); // safely extract [id]

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

// DELETE /api/product/:id
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectionToDatabase();

    const deletedUser = await User.findByIdAndDelete(params.id);

    if (!deletedUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ success: false, message: "Failed to delete user" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectionToDatabase();

    const id = request.nextUrl.pathname.split('/').pop(); // or extract with regex
    const body = await request.json();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update user' },
      { status: 500 }
    );
  }
}
