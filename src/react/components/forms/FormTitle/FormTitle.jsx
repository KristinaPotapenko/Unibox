import styles from "./FormTitle.module.scss";

export const FormTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
