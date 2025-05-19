import styles from "./Link.module.scss";

export const Link = ({ text, value, Icon, ...props }) => {
  return (
    <a className={styles.link} {...props}>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
      {value && <p>{value}</p>}
    </a>
  );
};
