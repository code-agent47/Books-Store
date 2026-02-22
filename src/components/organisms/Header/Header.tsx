import React, {useState, useEffect} from 'react';
import HeaderStyle from './HeaderStyle';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Img';
import logo from '../../../assets/images/brand.svg';
import logoMobile from '../../../assets/images/brand-mobile.svg';
import searchIcon from '../../../assets/images/search-icon.svg';
import booksIndex from '../../../assets/images/books-index.svg';
import index from '../../../assets/images/index.svg';
import cart from '../../../assets/images/cart.svg';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import Cart from '../Cart/Cart';
import {SearchAction} from '../../../redux/actions/SearchAction';
import MobileHeader from '../MobileHeader/MobileHeader';
import { useDispatch, useSelector} from 'react-redux';
import { TypedDispatch, RootStore } from '../../../config/ConfigStore';
import PaymentModal from '../PaymentModal/PaymentModal';

type HeaderProps = {
  showCartProp: boolean;
  showPaymentModalProp: boolean;
}
const Header = ({showCartProp, showPaymentModalProp}: HeaderProps) => {
  const [toggleCart, setToggleState] = useState(false);
  const [togglePaymentModal, setTogglePaymentModal] = useState(false);
  const [toggleMobileHeader, setToggleMobileHeader] = useState(false);
  const cartState = useSelector( (state:RootStore) => state.cartReducer);
  const dispatch: TypedDispatch = useDispatch();

  // useEffect(() => {
  //   setTogglePaymentModal(true);
  // }, [showPaymentModalProp]);

  const showPaymentModal = () => {
    setTogglePaymentModal(true);
  };

  const hidePaymentModal = () => {
    setTogglePaymentModal(false);
  };

  const renderPaymentModal = () => {
    if (togglePaymentModal) {
      return (
        <PaymentModal handleClose={hidePaymentModal} />
      );
    }
  };
  
  useEffect(() => {
    setToggleState(true)
  }, [showCartProp]);
  
  const showCart = () => {
    setToggleState(true)
  }

  const hideCart = () => {
    setToggleState(false);
  }

  const renderCart = () => {
    if(toggleCart && cartState.results.products.length > 0){
      return(
        <Cart handleClose={hideCart} showPaymentModal={showPaymentModal} />
      )
    }
  }

  const showMobileHeader = () => {
    setToggleMobileHeader(true)
  }

  const hideMobileHeader = () => {
    setToggleMobileHeader(false);
  }

  const renderMobileHeader = () => {
    if(toggleMobileHeader){
      return(
        <MobileHeader handleClose={hideMobileHeader}/>
      )
    }
  }

  

  return (
    <>
    {renderCart()}
    {renderPaymentModal()}
    <HeaderStyle>
      <div className={`container header`}>
        <div className={`header__logo`}>
          <Image image={logo} alt="logo" className={`logo`} onClick={() =>  dispatch(SearchAction(null))}/>
          <Image image={logoMobile} alt="logo" className={`logo-mobile`} onClick={() =>  dispatch(SearchAction(null))}/>
        </div>
        <div className={`header__search`}>
          <SearchForm />
        </div>
        <div className={`header__menu`}>
          <div className={`header__menu__index`}>
            <Image image={booksIndex} alt="books index" />
          </div>
          <div className={`header__menu__cart`} onClick={showCart}>
            <Image image={cart} alt="cart" />
            <div className={`header__menu__cart__badge`}>
              <Text value={cartState.results?.products.length} />
            </div>
          </div>
        </div>
        <div className={`header__mobile-menu`}>
          <Image image={searchIcon} alt="search icon" className={`--search`} onClick={showMobileHeader}/>
          <Image image={index} alt="books index" className={`--index`}/>
          <div className={`header__mobile-menu__cart`} onClick={showCart}>
            <Image image={cart} alt="cart" />
            <div className={`header__mobile-menu__cart__badge`}>
              <Text value={cartState.results?.products.length} />
            </div>
          </div>
        </div>
      </div>
      {renderMobileHeader()}
    </HeaderStyle>
    </>
  );
};

export default Header;
