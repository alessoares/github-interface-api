import React from 'react';
import Footer from '../footer';
import Header from '../header';
import * as S from './styled';


function Layout({ children }) {
  return (
    <S.WrapperLayout>
      
      <Header />
      {children}
      <Footer />
    </S.WrapperLayout>

  );
}

export default Layout;