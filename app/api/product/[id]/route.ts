import { NextResponse } from "next/server";
import connectionToDatabase from "@/lib/dbConnect";
import User from "@/modals/User";

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

// PUT /api/product/:id
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectionToDatabase();

    const body = await request.json();

    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, message: "Failed to update user" }, { status: 500 });
  }
}
