import styles from "./page.module.css";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Gradient className={styles.backgroundGradient} conic />
          <h1 className="text-5xl">Amit Gurbani</h1>
          <p>JavaScript Engineer | Web Enthusiast | Frontend | TypeScript</p>
        </div>
      </div>
    </main>
  );
}
