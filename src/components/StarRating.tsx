import React from "react";
import styles from "./StarRating.module.scss";

interface StarRatingProps {
  rating: number;
  showNumeric: boolean;
}

export const getStarCount = (rating: number): number => {
  if (rating <= 0) return 0;
  if (rating < 2) return 1;
  if (rating < 4) return 2;
  if (rating < 6) return 3;
  if (rating < 8) return 4;
  return 5;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  showNumeric = true,
}) => {
  const safeRating = typeof rating === "number" && !isNaN(rating) ? rating : 0;
  const starCount = getStarCount(safeRating);

  return (
    <span className={styles.starRating}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < starCount ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      ))}

      {showNumeric && (
        <span className={styles.numericRating}>({safeRating.toFixed(1)})</span>
      )}
    </span>
  );
};

export default StarRating;
