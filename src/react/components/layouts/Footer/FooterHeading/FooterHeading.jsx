import styles from "./FooterHeading.module.scss";

export const FooterHeading = ({ children, ...props }) => {
  return (
    <a {...props} className={styles.heading}>
      {children}
    </a>
  );
};
