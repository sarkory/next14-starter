"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData) => {
  // "use server";
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newPost = new Post({ title, desc, slug, userId });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin")
  } catch (error) {
    console.log(error);
    return { error: "something weng wrong!" };
  }
};

export const deletePost = async (formData) => {
  // "use server";
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog")
    revalidatePath("/admin")
  } catch (error) {
    console.log(error);
    return { error: "something weng wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  // "use server";
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newUser = new User({ username, email, password, img, isAdmin });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something weng wrong!" };
  }
};

export const deleteUser = async (formData) => {
  // "use server";
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin")
  } catch (error) {
    console.log(error);
    return { error: "something weng wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  const session = await signIn("github");
  console.log("session-ggg", session);
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  // "use server";
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true}
  } catch (error) {
    console.log(error);
    return { error: "something weng wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (err) {
    console.log('eeeeeee', err.message);
    
    if (err.message.includes("credentialssignin")) {
      return { error: "Invalid username or password" };
    }

    throw err;
  }
};
