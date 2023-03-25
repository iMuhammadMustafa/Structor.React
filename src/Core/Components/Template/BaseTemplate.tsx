import styles from "./BaseTemplate.module.css";

export interface IBaseTemplate {
  name: string;
  backgroundColor?: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ name, backgroundColor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      Hello world! From {name}
    </div>
  );
};

export default BaseTemplate;
