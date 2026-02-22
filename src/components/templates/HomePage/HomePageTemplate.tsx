import React, {useEffect, useState} from 'react';
import Header from '../../organisms/Header/Header';
import Hero from '../../organisms/Hero/Hero';
import HeaderText from '../../atoms/HeaderText/Text';
import HomePageTemplateStyle from './HomePageTemplateStyle';
import BookCard from '../../organisms/BookCard/BookCard';
import {BooksAction} from '../../../redux/actions/BooksAction';
import {useDispatch, useSelector} from 'react-redux';
import { RootStore, TypedDispatch } from '../../../config/ConfigStore';

const HomePageTemplate = () => {
  const dispatch: TypedDispatch = useDispatch();
  const booksState = useSelector( (state:RootStore) => state.booksReducer);
  const searchState = useSelector( (state:RootStore) => state.searchReducer);
  const [toggleCart, setToggleCart] = useState(false)
  const [togglePaymentModal, setTogglePaymentModal] = useState(false)
  
  useEffect(() => {
    if(booksState.results === null){
      dispatch(BooksAction())
    }
  });

  const showCart = () => {
    if(toggleCart){
      return setToggleCart(false)
    }
    setToggleCart(true)
  }
  
  return (
    <>
      <HomePageTemplateStyle>
       <Header showCartProp={toggleCart} showPaymentModalProp={togglePaymentModal}/>
       {
         (searchState.results === null) ? 
          <>
            <Hero />
            <div className={`container-full books`}>
              <div className={`container books__desc`}>
                <div className={`div-sm-12 books__desc__box`}>
                  <HeaderText value="All Books" />
                </div>
              </div>
              <div className={`container books__content`}>
                {
                  booksState.results?.data.map( (data: Record<any, any>, i: number) => {
                    return(
                      <div className={`div-xl-4 div-md-6 books__content__item`} key={i}>
                        <BookCard bookData={data} showCart={showCart}/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </> : 
          <div className={`container-full search-results`}>
            <div className={`container search-results__desc`}>
              <div className={`div-sm-12 search-results__desc__box`}>
                <h2> {searchState.results.data.length} result(s) <span> found for </span> `{searchState.results.searchText}` </h2>
              </div>
              <div className={`container books__content`}>
                {
                  searchState.results?.data.map( (data: Record<any, any>, i: number) => {
                    return(
                      <div className={`div-xl-4 div-md-6 books__content__item`} key={i}>
                        <BookCard bookData={data} showCart={showCart}/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
       }
      </HomePageTemplateStyle>
    </>
  );
};

export default HomePageTemplate;
