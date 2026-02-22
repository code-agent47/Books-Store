import styled from 'styled-components';

const CartStyle = styled.div`
  animation: show-bg 0.5s linear forwards;
  box-sizing:border-box;
  display:flex;
  min-height:100%;
  left:0;
  position:absolute;
  position:fixed;
  top: 0;
  width:100%;
  z-index:8000;
  @keyframes show-bg{
      0%{
          background:rgba(0, 0, 0, 0)
      }
      100%{
          background:rgba(190,190,190,0.8);
      }
  }
  .modal-container{
    box-sizing:border-box;
    min-height:100vh;
  }
  .modal-container__box{
    -ms-flex: 0 0 480px;
    -webkit-flex: 0 0 480px;
    flex: 0 0 480px;
    max-width: 480px;
    animation: slide 0.5s linear forwards;
    background: #fefefe;
    height: 100vh;
    margin-left:auto;
    overflow:scroll;
    transform: translateX(480px);
    @media screen and (max-width: 576px){
      -ms-flex: 0 0 100%;
      -webkit-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @keyframes slide{
    0%{
      transform: translateX(480px);
    }
    100%{
      transform: translateX(0);
    }
  } 
  .modal-container__box__header{
    background: white;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    height: 100px;
    justify-content: space-between;
    padding: 0 23px 0 30px;
    @media screen and (max-width: 576px){
      height: 70px;
    }
  }
  .modal-container__box__header__left{
    cursor: pointer;
    display: flex;
    img{
      @media screen and (max-width: 576px){
        height: 18px;
        margin-top: 3px;
        width: 18px;
      }
    }
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      margin-top: 3px;
      text-align: center;
      width: 59px;
    }
  }
  .modal-container__box__header__right{
    display: flex;
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      margin-right: 14px;
      margin-top: 3px;
    }
  }
  .modal-container__box__content{
    box-sizing: border-box;
    padding: 0 40px 0 33px;
    @media screen and (max-width: 576px){
      padding: 0 30px 0 30px;
    }
  }
  .modal-container__box__content__item{
    border-bottom: 1px solid #EEEEEE;
    box-sizing: border-box;
    padding: 23px 0 24px 0;
    @media screen and (max-width: 576px){
      padding: 20px 0 11px 0;
    }
  }
  .modal-container__box__content__item__details{
    display: flex;
    img{
      height: auto;
      width: 60px;
    }
  }
  .modal-container__box__content__item__details__text{
    position: relative;
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px;
      margin-top: 3px;
    }
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      margin-left: 10px;
      margin-top: 6px;
      @media screen and (max-width: 576px){
        margin-top: 6.5px;
      }
    }
    .--remove{
      bottom: 0;
      margin: unset;
      margin-bottom: 2.5px;
      margin-left: 12px;
      position: absolute;
    }
  }
  .modal-container__box__content__item__price{
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      margin-top: 4px;
      text-align: right;
    }
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-top: 17px;
      text-align: right;
    }
  }
  .modal-container__box__content__item__price__counter{
    display: flex;
    margin-top: 7px;
  }
  .box{
    border-bottom: 1px solid #DDDDDD;
    border-top: 1px solid #DDDDDD;
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    .container-full{
      height: 100%;
    }
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .--counter{
    background: #F9F9FB;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    cursor: pointer;
  }
  .modal-container__box__content__bottom{
    margin-top: 49px;
    @media screen and (max-width: 992px){
      margin-top: 38px;
    }
  }
  .modal-container__box__content__bottom__total{
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      margin-top: 26px;
    }
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      letter-spacing: -1px;
      line-height: 41px;
    }
  }
  .modal-container__box__content__bottom__action{
    margin-top: 18px;
    position: relative;
    img{
      left: 0;
      margin-left: 22px;
      position: absolute;
    }
    .button{
      background: #000000;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
      color: #FFFFFF;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      height: 70px;
      padding-left: 60px;
      width: 100%;
    }
  }

  .modal-container__box__content__bottom__form{
    margin-top: 32px;
    input{
      background: #F9F9FB;
      border: 1px solid #DDDDDD;
      border-radius: 5px;
      box-sizing: border-box;
      height: 40px;
      margin-top: 16px;
      padding-left: 20px;
      width: 100%;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export default CartStyle;
