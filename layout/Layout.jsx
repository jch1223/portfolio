import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Hamburger = dynamic(() => import("./Hamburger"), { ssr: false });
const Header = dynamic(() => import("./Header"), { ssr: false });
const ScrollTop = dynamic(() => import("./ScrollTop"), { ssr: false });

import styled from "styled-components";

const ContentStyled = styled.div`
  margin-top: 70px;
  min-height: calc(100vh - 360px);
`;

export default ({ children, title = "chabot", focus, subFocus }) => {
  const size = useWindowSize();

  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <style jsx global>{`
        body {
          font-family: "Nanum Square", Noto Sans KR, sans-serif;
        }
      `}</style>
      {size.width <= 768 ? (
        <Hamburger></Hamburger>
      ) : (
        <Header focus={focus} subFocus={subFocus} />
      )}
      {size.width < 768 && <ScrollTop></ScrollTop>}
      <ContentStyled>{children}</ContentStyled>
      <Footer></Footer>
    </div>
  );
};
