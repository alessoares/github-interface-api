import React from 'react'
import * as S from './styled'

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitleH2>{name}</S.WrapperTitleH2>
      <h4>Full name: </h4>
      <p><S.WrapperLink href={linkToRepo} target='_blank' rel="noreferrer">{fullName}</S.WrapperLink></p>

    </S.Wrapper>
  )
};

export default RepositoryItem;