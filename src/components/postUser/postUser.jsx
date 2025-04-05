import styles from "./postUser.module.css";
import { getUser } from "../../lib/data";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getUser = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Something weng wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getUser(userId);
  const user = await getUser(userId);

  return (
    <>
      <Image
        src={user.img || "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </>
  );
};

export default PostUser;
