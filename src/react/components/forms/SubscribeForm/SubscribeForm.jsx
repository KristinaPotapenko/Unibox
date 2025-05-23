import { Input } from "../../inputs/Input/Input";
import { Button } from "../../inputs/Button/Button";
import { FormTitle } from "../FormTitle/FormTitle";
import styles from "./SubscribeForm.module.scss";

export const SubscribeForm = () => {
  return (
    <div className={styles.formWrapper}>
      <FormTitle>Get the latest new from us</FormTitle>
      <form>
        <Input type="text" placeholder="Enter your email address" />
        <p className={styles.privacy}>
          By signing up, you agree to our <a>Privacy Policy</a> and{" "}
          <a href="">Terms of Service</a>.
        </p>
        <Button>Subscribe</Button>
      </form>
    </div>
  );
};
