import React, { useState } from "react";
import PaymentModalStyle from "./PaymentModalStyle";
import Text from "../../atoms/Text/Text";
import HeaderText from "../../atoms/HeaderText/Text";
import Image from "../../atoms/Image/Img";
import closeIcon from "../../../assets/images/arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, TypedDispatch } from "../../../config/ConfigStore";
import { clearCart } from "../../../redux/actions/CartAction";

type PaymentModalProps = {
  handleClose: Function;
};

const PaymentModal = ({ handleClose }: PaymentModalProps) => {
  const dispatch: TypedDispatch = useDispatch();
  const cartState = useSelector((state: RootStore) => state.cartReducer);
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!form.cardName.trim()) {
      newErrors.cardName = "Card holder name is required";
    }

    if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) {
      newErrors.expiry = "Expiry must be in MM/YY format";
    }

    if (!/^\d{3}$/.test(form.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        handleClose();
      }, 2000);

      dispatch(clearCart());
    }
  };

  return (
    <PaymentModalStyle>
      <div className="payment-overlay">
        <div className="payment-box">
          <div className="payment-box__header">
            <div
              onClick={() => handleClose()}
              className="payment-box__header__close"
            >
              <Image image={closeIcon} alt="close" />
              <Text value="Close" />
            </div>
            {/* <HeaderText value="Online Payment" /> */}
          </div>

          {success ? (
            <div className="payment-success">
              <HeaderText value="Payment Successful 🎉" />
              <Text value="Your transaction has been completed successfully." />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="payment-box__form">
              <div>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Card Holder Name"
                  value={form.cardName}
                  onChange={handleChange}
                />
                {errors.cardName && <span>{errors.cardName}</span>}
              </div>

              <div>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (16 digits)"
                  value={form.cardNumber}
                  onChange={handleChange}
                />
                {errors.cardNumber && <span>{errors.cardNumber}</span>}
              </div>

              <div className="row">
                <div>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={handleChange}
                  />
                  {errors.expiry && <span>{errors.expiry}</span>}
                </div>

                <div>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={handleChange}
                  />
                  {errors.cvv && <span>{errors.cvv}</span>}
                </div>
              </div>

              <button type="submit" className="button">
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
    </PaymentModalStyle>
  );
};

export default PaymentModal;
