import React, { useEffect } from "react";
import CartStyle from "./CartStyle";
import Text from "../../atoms/Text/Text";
import HeaderText from "../../atoms/HeaderText/Text";
import Image from "../../atoms/Image/Img";
import arrow from "../../../assets/images/arrow-left.svg";
import cart from "../../../assets/images/cart.svg";
import cartWhite from "../../../assets/images/cart-white.svg";
import minus from "../../../assets/images/minus.svg";
import plus from "../../../assets/images/plus.svg";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../../redux/actions/CartAction";
import {
  decreaseAvailableQuantity,
  increaseAvailableQuantity,
  restoreAvailableQuantity,
} from "../../../redux/actions/BooksAction";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, TypedDispatch } from "../../../config/ConfigStore";

type CartProps = {
  handleClose: Function;
  showPaymentModal: Function;
};

const Cart = ({ handleClose, showPaymentModal }: CartProps) => {
  const dispatch: TypedDispatch = useDispatch();
  const cartState = useSelector((state: RootStore) => state.cartReducer);

  useEffect(() => {
    //  document.getElementsByTagName("body").style.overflow = "hidden"
  }, []);

  const increaseCartQuantity = (productDetails: any) => {
    if (productDetails.maxQuantity > productDetails.quantity) {
      dispatch(decreaseAvailableQuantity(productDetails.id));
      dispatch(increaseQuantity(productDetails.id));
    }
  };

  const decreaseCartQuantity = (productDetails: any) => {
    if (productDetails.quantity > 1) {
      dispatch(increaseAvailableQuantity(productDetails.id));
      dispatch(decreaseQuantity(productDetails.id));
    } else {
      dispatch(increaseAvailableQuantity(productDetails.id));
      dispatch(deleteProduct(productDetails.id));
    }
  };

  const removeItem = (productDetails: any) => {
    dispatch(
      restoreAvailableQuantity(productDetails.id, productDetails.quantity)
    );
    dispatch(deleteProduct(productDetails.id));
  };

  const subTotal = () => {
    let total: any = [];
    cartState.results?.products.map((product: Record<any, any>, i: number) => {
      let price = product.price * product.quantity;
      total.push(price);
      return product;
    });
    return (
      <HeaderText
        value={`$${total
          .reduce((a: number, b: number) => a + b, 0)
          .toFixed(2)}`}
      />
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
    showPaymentModal();
  };

  return (
    <CartStyle>
      <div className={`container-full modal-container`}>
        <div className={`modal-container__box`}>
          <div className={`container-full center modal-container__box__header`}>
            <div
              className={`modal-container__box__header__left`}
              onClick={() => handleClose()}
            >
              <Image image={arrow} alt="arrow" />
              <Text value="Back" />
            </div>
            <div className={`modal-container__box__header__right`}>
              <Text value="Your Cart" />
              <Image image={cart} alt="cart" />
            </div>
          </div>
          <div className={`container-full modal-container__box__content`}>
            {cartState.results?.products.map(
              (product: Record<any, any>, i: number) => {
                return (
                  <div
                    className={`container-full modal-container__box__content__item`}
                    key={i}
                  >
                    <div
                      className={`modal-container__box__content__item__details`}
                    >
                      <Image image={product.image_url} alt="book" />
                      <div
                        className={`modal-container__box__content__item__details__text`}
                      >
                        {product.title.length >= 25 ? (
                          <HeaderText
                            value={`${product.title.substring(0, 17)}...`}
                          />
                        ) : (
                          <HeaderText value={`${product.title}`} />
                        )}
                        <Text value={product.authors[0].name} />
                        <Text
                          value="Remove"
                          className={`--remove`}
                          onClick={() => removeItem(product)}
                        />
                      </div>
                    </div>
                    <div
                      className={`modal-container__box__content__item__price`}
                    >
                      <Text value={`$${product.price}`} />
                      <div
                        className={`modal-container__box__content__item__price__counter`}
                      >
                        <div
                          className={`modal-container__box__content__item__price__counter__item box --counter`}
                          onClick={() => decreaseCartQuantity(product)}
                        >
                          <div className={`container-full center`}>
                            <Image image={minus} alt="minus" />
                          </div>
                        </div>
                        <div
                          className={`modal-container__box__content__item__price__counter__item box`}
                        >
                          <div className={`container-full center`}>
                            <Text value={product.quantity} />
                          </div>
                        </div>
                        <div
                          className={`modal-container__box__content__item__price__counter__item box --counter`}
                          onClick={() => increaseCartQuantity(product)}
                        >
                          <div className={`container-full center`}>
                            <Image image={plus} alt="plus" />
                          </div>
                        </div>
                      </div>
                      <HeaderText
                        value={`$${(product.price * product.quantity).toFixed(
                          2
                        )}`}
                      />
                    </div>
                  </div>
                );
              }
            )}
            <div
              className={`container-full modal-container__box__content__bottom`}
            >
              <div
                className={`container-full modal-container__box__content__bottom__total`}
              >
                <Text value="Subtotal" />
                {subTotal()}
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className={`container-full modal-container__box__content__bottom__form`}
                >
                  <input type="text" placeholder="Enter your fullname" required />
                  <input type="text" placeholder="Enter your email" required />
                  <input type="text" placeholder="Enter your address" required />
                </div>
                <div
                  className={`container-full modal-container__box__content__bottom__action`}
                >
                  <button className={`button`} type="submit">
                    <Image image={cartWhite} alt="cart" />
                    Proceed to Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
