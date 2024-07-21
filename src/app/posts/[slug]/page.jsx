import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Ex elit qui pariatur esse duis.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.04.12</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Et irure dolore est cupidatat tempor veniam proident minim laborum
              mollit. Voluptate deserunt ex sint deserunt. Excepteur anim
              voluptate est sint dolore occaecat nisi non. Nisi ad deserunt
              nostrud et culpa dolor eu. Ut mollit nostrud culpa qui cillum
              sint.
            </p>
            <h2>
              Lorem cillum laborum duis ut excepteur sit incididunt voluptate
              duis excepteur.
            </h2>
            <p>
              Et irure dolore est cupidatat tempor veniam proident minim laborum
              mollit. Voluptate deserunt ex sint deserunt. Excepteur anim
              voluptate est sint dolore occaecat nisi non. Nisi ad deserunt
              nostrud et culpa dolor eu. Ut mollit nostrud culpa qui cillum
              sint.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
