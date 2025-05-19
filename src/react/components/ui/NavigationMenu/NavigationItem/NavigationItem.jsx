import { NavigationLink } from "../NavigationLink/NavigationLink";

export const NavigationItem = ({ text }) => {
  return (
    <li>
      <NavigationLink text={text} />
    </li>
  );
};
