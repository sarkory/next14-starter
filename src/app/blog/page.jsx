import styles from "./page.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "../../lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  // 使用no-store 可以不缓存
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  // 一小时刷新一次，具体看自己的数据更新频率
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: {revalidate: 3600} });

  if (!res.ok) {
    throw new Error("Something weng wrong");
  }

  return res.json();
};

// const BlogPage = ({params, searchParams}) => {
const BlogPage = async () => {
  // console.log(params)
  // console.log(searchParams)

  const posts = await getData();
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      {/* <div className={styles.post}>
        <PostCard />
      </div>
      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  );
};

export default BlogPage;
