import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const HomeWrap = styled.main`
  background-color: ${Colors.Primary};
  height: 100vh;
  text-align: center;

  & > .main {
    padding-top: 2rem;
    height: 37vh;
    align-items: center;
    display: flex;
    justify-content: center;

    &.show-content > .title {
      transform: translateY(0);
    }
    &.show-content {
      display: flex; /* show-content 클래스가 적용된 경우에만 flex로 설정됩니다 */
    }

    & > .title {
      transition:
        transform 0.7s ease,
        opacity 0.2s ease;
      transform: translateY(200px);
      opacity: 0;
      &.show-title {
        opacity: 1;
      }
      & > .powered {
        & > .kakaoCloud {
          width: fit-content;
          height: 13px;
        }

        ${fontGenerator('15px', '200', '26.92px')};
        color: ${Colors.White};
        margin-top: 10px;
      }
      & > .sub_title {
        margin-top: 10px;

        ${fontGenerator('22.56px', '500', '26.92px')};
        color: ${Colors.White};
      }
    }
  }
  & > .desc {
    margin-top: 50px;
    color: ${Colors.White};
  }
  & > .bottom {
    display: none;
  }
  & > .splash_image > img {
    visibility: hidden;
    top: 300px;
  }

  .show-content {
    display: block;
  }
  .show-content > img {
    visibility: visible;
    top: 21px;
    display: block;
  }

  & > .splash_image {
    position: absolute;
    display: flex;
    bottom: 20px;
    width: 100%;
    & > .vacgom_icon {
      width: 100%;
      position: relative;
      //top: 300px;
      //height: 100%;

      transition: top 1s cubic-bezier(0.18, 0.69, 0.32, 1.28);
      z-index: 0;
    }
  }

  & > .bottom {
    & > button {
      position: relative;
      z-index: 1;
      margin-bottom: 10px;
    }
    & > .privacy {
      ${fontGenerator('14px', '600', '16px', '-0.3px')}
      color: ${Colors.Gray50};
      cursor: pointer;
    }
    padding: 50px 20px;
  }

  @media screen and (max-height: 718px) {
    & > .main {
      padding-top: 1rem;
      height: 28vh;
      transition: 0.2s;
    }
  }
`;
