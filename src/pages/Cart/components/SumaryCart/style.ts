import styled from "styled-components";

export const Sumarystyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;

  width: 100%;
  height: 100%;

  min-height: calc(100vh - 110px);

  @media screen and (min-width: 563px) {
    width: 563px;
  }

  .containerCheck {
    display: flex;
    justify-content: center;
    align-items: center;

    .checked {
      width: 30px;
      height: 30px;
      color: #13f200;

      @media screen and (min-width: 431px) {
        width: 48px;
        height: 48px;
      }
    }

    .notChecked {
      width: 30px;
      height: 30px;
      color: #ffffff;

      @media screen and (min-width: 431px) {
        width: 48px;
        height: 48px;
      }
    }

    .arrowOne {
      width: 30%;
      fill: #ffffff;

      @media screen and (min-width: 431px) {
        width: 98px;
      }
    }

    .arrowTwo {
      width: 30%;
      fill: #ffffff;

      @media screen and (min-width: 431px) {
        width: 98px;
      }
    }
  }

  .title {
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    color: #fefefe;
    text-transform: uppercase;

    margin: 32px 0 34px 0;

    @media screen and (min-width: 563px) {
      font-size: 32px;
      line-height: 38px;
    }
  }

  .subtitle {
    font-weight: 900;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #ffffff;

    width: 100%;
    padding: 0 10px 44px 10px;
    padding-bottom: 44px;
    border-bottom: 3px solid #ffffff;

    @media screen and (min-width: 563px) {
      font-size: 30px;
      line-height: 35px;
      width: 452px;
      padding: 0 0 44px 0;
    }
  }

  .containerSumary {
    display: flex;
    flex-direction: column;
    gap: 27px;

    margin: 18px 0 32px 0;
    width: 100%;

    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #ffffff;

    @media screen and (min-width: 563px) {
      font-size: 26px;
      line-height: 30px;
      width: 463px;
    }

    .values {
      font-size: 16px;
      line-height: 19px;

      @media screen and (min-width: 563px) {
        font-size: 23px;
        line-height: 27px;
      }
    }

    .lineSumary {
      display: flex;
      width: 100%;
      padding: 0 10px;
      justify-content: space-between;
      align-items: center;

      @media screen and (min-width: 563px) {
        width: 452px;
      }

      .totalName {
        font-size: 29px;
        line-height: 34px;

        @media screen and (min-width: 563px) {
        }
      }

      .totalValue {
        font-size: 18px;
        line-height: 21px;

        @media screen and (min-width: 563px) {
          font-size: 26px;
          line-height: 30px;
        }
      }
    }
    .lineSumaryTotal {
      display: flex;
      width: 100%;
      padding: 0 10px;
      justify-content: space-between;
      align-items: center;
      border-top: 3px solid #ffffff;

      @media screen and (min-width: 563px) {
        width: 452px;
        padding: 11px;
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 21px;

    padding: 50px 10% 10px 10%;

    @media screen and (min-width: 563px) {
      padding: 0 10% 10px 10%;
    }
  }
`;
