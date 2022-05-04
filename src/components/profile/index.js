import React from 'react'
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>
          <S.WrapperImage src="https://avatars.githubusercontent.com/u/4985001?v=4" alt="User profile" />
          <S.WrapperInfoUser>
              <div>
                <h1>Alexandre Soares dos Santos</h1>
                  <S.WrapperUserName>
                    <h3>Username: </h3>
                    <a href='https://github.com/alessoares' target='_blank' rel="noreferrer">alessoares</a>
                  </S.WrapperUserName>
              </div>
             <S.WrapperStatusCount>
                
                  <div>
                    <h4>Followers</h4>
                    <span>5</span>
                  </div>
                  <div>
                    <h4>Starred</h4>
                    <span>5</span>
                  </div>
                  <div>
                    <h4>Following</h4>
                    <span>5</span>
                  </div>
                
              </S.WrapperStatusCount>
          </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile;