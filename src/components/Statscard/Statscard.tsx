import styles from "./styles.module.scss";

interface StatscardProps {
  title: string;
  value: number;
}

export const Statscard: React.FC<StatscardProps> = ({ title, value }) => {
  return (
    <article className={styles.stats_card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
