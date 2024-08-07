import { Skeleton } from "@mui/material";

import "./productCardSkeleton.css";

export const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton-container">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={140}
      />
      <Skeleton animation="wave" variant="rounded" width={"90%"} height={28} />
      <Skeleton animation="wave" variant="rounded" width={"90%"} height={28} />
      <Skeleton animation="wave" variant="rounded" width={"90%"} height={18} />
      <Skeleton animation="wave" variant="rounded" width={"90%"} height={18} />
      <Skeleton animation="wave" variant="rounded" width={"30%"} height={32} />
      <Skeleton animation="wave" variant="rounded" width={"30%"} height={30} />
    </div>
  );
};
