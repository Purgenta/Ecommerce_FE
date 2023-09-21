import { Article } from "../../types/types";

export const calculatePrice = (article: Article) => {
  const {
    discount,
    price,
    category: { discount: categoryDiscount },
  } = article;
  const articlePrice = price.find((value) => value.type === "ECOMMERCE")!;
  const retailPrice = price.find((value) => value.type === "RETAIL");
  let discountAmount = discount?.amount || categoryDiscount?.amount || 0;
  if (discount && categoryDiscount) {
    discountAmount =
      discount.amount > categoryDiscount.amount
        ? discount.amount
        : categoryDiscount.amount;
  }
  return {
    price: articlePrice.value * ((100 - discountAmount) / 100),
    retailPrice: retailPrice
      ? retailPrice.value * ((100 - discountAmount) / 100)
      : retailPrice,
    discountPercentage: discountAmount,
  };
};
