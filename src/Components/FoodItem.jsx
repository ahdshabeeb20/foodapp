import styles from "./FoodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.image} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setFoodId(food.id)}>
          View recipe
        </button>
      </div>
    </div>
  );
}
