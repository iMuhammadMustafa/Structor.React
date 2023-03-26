import styles from "./BaseNavbar.module.css";

export interface IBaseNavbar {
  name: string;
  backgroundColor?: string;
}

const BaseNavbar: React.FC<IBaseNavbar> = ({ name, backgroundColor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      Hello world! From {name}
    </div>
  );
};

export default BaseNavbar;
