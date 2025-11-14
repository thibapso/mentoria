"use client";

import styles from "./Product.module.scss";
import SplitText from "@/components/ui/SplitText";

interface ProductProps {
  id?: string;
}

export default function Product({ id }: ProductProps) {
  return (
    <section id={id} className={styles.product}>
      <div className={styles.container}>
        <SplitText
          text="Transforme seu Currículo"
          className={styles.title}
          tag="h2"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-50px"
          textAlign="center"
        />
      </div>
    </section>
  );
}
