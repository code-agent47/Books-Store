import styled from "styled-components";

const PaymentModalStyle = styled.div`
  .payment-overlay {
    animation: fade-bg 0.3s ease forwards;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9000;
  }

  @keyframes fade-bg {
    from {
      background: rgba(0, 0, 0, 0);
    }
    to {
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .payment-box {
    background: #ffffff;
    width: 420px;
    max-width: 95%;
    border-radius: 8px;
    padding: 30px;
    animation: scale-in 0.3s ease forwards;
    font-family: "Ubuntu";
  }

  @keyframes scale-in {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .payment-box__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    font-family: "Ubuntu";
    h1 {
        font-family: "Ubuntu" !important;
      }
  }

  .payment-box__header__close {
    cursor: pointer;
    display: flex;
    align-items: center;

    p {
      margin-left: 6px;
      font-size: 14px;
      font-weight: 600;
      font-family: "Ubuntu";
    }
  }

  .payment-box__form {
    input {
      width: 100%;
      height: 45px;
      margin-top: 15px;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #ddd;
      font-size: 14px;
      font-family: "Ubuntu";
    }

    span {
      color: red;
      font-size: 12px;
      font-family: "Ubuntu";
    }

    .row {
      display: flex;
      gap: 15px;

      div {
        flex: 1;
      }
    }

    .button {
      margin-top: 25px;
      height: 50px;
      width: 100%;
      background: #000;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      font-family: "Ubuntu";
    }
  }

  .payment-success {
    font-family: "Ubuntu";
    text-align: center;

    h2 {
      font-family: "Ubuntu";
      margin-bottom: 10px;
    }

    p {
      font-family: "Ubuntu";
      font-size: 14px;
    }
  }
`;

export default PaymentModalStyle;
