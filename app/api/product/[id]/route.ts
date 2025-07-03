// app/api/product/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectionToDatabase from "@/lib/dbConnect";
import User from "@/modals/User";
import mongoose from "mongoose";

// Helper to extract ID from URL
function getIdFromUrl(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  return segments[segments.length - 1];
}

export async function GET(request: NextRequest) {
  try {
    await connectionToDatabase();

    const id = getIdFromUrl(request);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectionToDatabase();

    const id = getIdFromUrl(request);
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
