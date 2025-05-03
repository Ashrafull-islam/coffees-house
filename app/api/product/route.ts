import connectionToDatabase from "@/lib/dbConnect";
import User from "@/modals/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectionToDatabase();
    const data = await request.json();
    // Destructure data from the request (adjust according to your request structure)
    const { name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
        price } = data;
    //check for exting entry
    const existing=await User.findOne({name:name});
    if(existing){
        return NextResponse.json({
            success:false,
            message:"Coffee already exit",
        },{
            status:400
        });
    }
    // Create a new user document
    const newUser = new User({
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
        price
    });

    // Save the user document to MongoDB
    await newUser.save();
    // Return a success response with the created user data
    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ success: false, message: "Failed to create user" });
  }
}
// GET: Get all users
export async function GET() {
    try {
      await connectionToDatabase();
      const users = await User.find(); // Get all users
      return NextResponse.json({ success: true, users });
    } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json({ success: false, message: "Failed to fetch users" });
    }
  }
