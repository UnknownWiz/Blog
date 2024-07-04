import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> 01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>Irure non amet eiusmod sit nostrud adipisicing consectetur Lorem excepteur aliqua. Incididunt enim nisi esse reprehenderit esse deserunt mollit laborum amet Lorem non qui eiusmod. Consectetur commodo eu veniam elit esse sint. Pariatur cupidatat veniam eu exercitation nostrud sint reprehenderit est occaecat sit eu officia incididunt.</p>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> 01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>Irure non amet eiusmod sit nostrud adipisicing consectetur Lorem excepteur aliqua. Incididunt enim nisi esse reprehenderit esse deserunt mollit laborum amet Lorem non qui eiusmod. Consectetur commodo eu veniam elit esse sint. Pariatur cupidatat veniam eu exercitation nostrud sint reprehenderit est occaecat sit eu officia incididunt.</p>
      </div><div className={styles.comments}>
        <div className={styles.comment}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> 01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>Irure non amet eiusmod sit nostrud adipisicing consectetur Lorem excepteur aliqua. Incididunt enim nisi esse reprehenderit esse deserunt mollit laborum amet Lorem non qui eiusmod. Consectetur commodo eu veniam elit esse sint. Pariatur cupidatat veniam eu exercitation nostrud sint reprehenderit est occaecat sit eu officia incididunt.</p>
      </div><div className={styles.comments}>
        <div className={styles.comment}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> 01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>Irure non amet eiusmod sit nostrud adipisicing consectetur Lorem excepteur aliqua. Incididunt enim nisi esse reprehenderit esse deserunt mollit laborum amet Lorem non qui eiusmod. Consectetur commodo eu veniam elit esse sint. Pariatur cupidatat veniam eu exercitation nostrud sint reprehenderit est occaecat sit eu officia incididunt.</p>
      </div>
    </div>
  );
};

export default Comments;
