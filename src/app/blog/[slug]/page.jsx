import styles from "./page.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "../../../lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something weng wrong");
  }

  return res.json();
}

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  // const post = await getPost(slug);
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image src={post.img} alt="" fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          {/* <Image
            src="https://images.pexels.com/photos/31349385/pexels-photo-31349385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{user.name}</span>
          </div> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
