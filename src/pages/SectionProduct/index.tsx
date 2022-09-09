import Navigate from "./components/Navigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import Block from "./components/Block";
import { SectionProductStyled } from "./style";
import Showcase from "./components/Showcase";
import { useEffect } from "react";
import { useRequest } from "../../Context/Request";
import StatePage from "./components/statePage";
import { useModal } from "../../Context/Modal";
import { useAuthSearch } from "../../Context/authProductSearch";

const SectionProduct = () => {
  const { leaveModalFunction } = useModal();

  const { TakeProductPerPage } = useRequest();

  const { setProducts, setPage, setPageFilter} = useAuthSearch();


  const takePage = (page: number) => {
    TakeProductPerPage(page).then((result) => {
      if (result.length != 0) {
        setProducts(result);
      }
    });
  };
  
  useEffect(() => {
    takePage(1);
    setPage(1)
    setPageFilter(1)
    leaveModalFunction();
  }, []);

  return (
    <TransitionPage>
      <SectionProductStyled>
        <Header onText={(e) => {}} />
        <Block>
          <Navigate />
          <Showcase />
        </Block>
        <StatePage takePage={takePage} />
        <Footer />
      </SectionProductStyled>
    </TransitionPage>
  );
};
export default SectionProduct;
