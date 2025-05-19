import { Link } from "../../ui/Link/Link";
import { headerLinksBlock } from "./headerLinksBlock";
import style from "./HeaderLinks.module.scss";

export const HeaderLinks = () => {
  return (
    <div className={style.headerLinks}>
      {headerLinksBlock.map((link) => {
        return (
          <Link
            key={link.id}
            text={link.text && link.text}
            value={link.value}
            Icon={link.icon}
          />
        );
      })}
    </div>
  );
};
