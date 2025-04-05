// "use client";

import styles from "./page.module.css";
import Image from "next/image";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest/hydrationTest";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
// ssr: false,
// })
export const metadata = {
  title: "Next App Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();
  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}

        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
