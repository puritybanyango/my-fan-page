// app/components/CardGrid.js
import Link from "next/link";
import styles from "./CardGrid.module.css";
import Card from "./Card";


export default function CardGrid({ items }) {
  return (
    
    <div className={styles.grid}>
      {items.map((item) => (
        <Link href={"/faves/" + item.id} key={item.id}>
        <Card
          key={item.id}
          name={item.name}
          blurb={item.blurb}
          rating={item.rating}
          image={item.image}
        />
        </Link>
      ))}
    </div>
  );
}

