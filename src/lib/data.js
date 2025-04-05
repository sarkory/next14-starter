// TEMPORARY DATA
// const users = [
//   {id: 1, name: 'John', username: 'john'},
//   {id: 2, name: 'Johe', username: 'johe'}
// ]

// const posts = [
//   {id: 1, title: 'Post 1', userId: 1},
//   {id: 2, title: 'Post 2', userId: 1},
//   {id: 3, title: 'Post 3', userId: 2},
// ]

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};
export const getUser = async (id) => {
  // noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};
