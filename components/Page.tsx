import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import styles from "@styles/Home.module.css";

const Page = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <SbEditable content={content}>
      <main className={styles.main}>
        {content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </main>
    </SbEditable>
  );
};

export default Page;
