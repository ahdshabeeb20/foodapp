import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.length > 0 ? (
        foodData.map((food) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        ))
      ) : (
        <p align="center">no data found</p>
      )}
    </div>
  );
}
