import styles from "./about.module.css"; 

export default function About() { 
  return ( 
    <main className={styles.mainPart}> 
      <div className={styles.container}> 
        {/* Fixed: Removed quotes */}
        <div className={styles.parentAll}>
          <img 
            src="https://i.pinimg.com/736x/4d/58/19/4d58190108a338f3aceb994a135f75e5.jpg" 
            alt="Purity pic"
            className={styles.bikeImage}
          /> 
        </div> 
        <h1>Karen, Kenya</h1> 
        <p className={styles.cityName}> 
          Hi 🤗! All the queens deserve a fast baby🏍. With a speed of at least 400 km/h and horsepower of 305 hp, this babies can take you to the moon and back😜.
          Unlike what you have been promised numerous times but has hardly happened🥹. The beauty in this bikes is unmatched. They are one of the best innovations earth has💞.
        </p> 
      </div> 
    </main> 
  ); 
}
