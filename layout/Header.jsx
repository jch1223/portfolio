import Link from "next/link";
import styled from "styled-components";
import Container from "./Container";

const MenuDiv = styled.div`
  overflow: hidden;
  text-align: right;
  height: 70px;
  transition: all 0.5s ease;
  position: fixed;
  background: #fff;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;

  /* 상단 메뉴 hover시 내려가는 높이 */
  :hover {
    height: 220px;
  }

  .logoImg {
    width: 144px;
    padding: 16.5px 0;
    float: left;
  }
  .logoImg img {
    width: 100%;
  }
  .menu {
    display: inline-block;
    font-size: 18px;
    padding-top: 21px;
    padding-left: 80px;
    text-align: center;
  }
  .menu a {
    display: inline-block;
    color: #4c4c4c;
    width: 100%;
    height: 100%;
  }
  .menu li {
    font-size: 16px;
    margin-bottom: 6px;
  }
  .menu a:hover {
    color: #29adb3;
  }
  .focus {
    color: #29adb3 !important;
  }
  .subFocus {
    color: #29adb3 !important;
  }
  #menuTitle {
    color: #4c4c4c;
    margin-bottom: 26px;
  }
  #menuTitle::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: #29adb3;
    transition: all 0.3s ease;
  }
  .menu:hover #menuTitle::after {
    width: 100%;
  }
  .focus::after {
    width: 100% !important;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  a:hover {
    text-decoration: none;
  }

  @media (max-width: 1220px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Header = ({ focus, subFocus }) => {
  const menuHandler = e => {
    e.className = "focus";
  };

  const subMenuHandler = e => {
    e.className = "subFocus";
  };

  return (
    <MenuDiv>
      <Container>
        <Link href="/" prefetch={false}>
          <a className="logoImg">
            <img src="/static/top_logo.png" alt="로고이미지" />
          </a>
        </Link>

        <div className="menu" onClick={menuHandler}>
          <Link href="/chabot/service" prefetch={false}>
            <a
              id="menuTitle"
              className={focus === "chabot" ? "focus" : "chabot"}
            >
              차봇하다
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/chabot/service" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "service" ? "subFocus" : "service"}
                >
                  서비스
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chabot/brand" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "brand" ? "subFocus" : "brand"}
                >
                  브랜드
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chabot/people" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "people" ? "subFocus" : "people"}
                >
                  사람들
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu" onClick={menuHandler}>
          <Link href="/with/recruit" prefetch={false}>
            <a id="menuTitle" className={focus === "with" ? "focus" : "with"}>
              함께하다
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/with/recruit" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "recruit" ? "subFocus" : "recruit"}
                >
                  채용
                </a>
              </Link>
            </li>
            <li>
              <Link href="/with/news" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "news" ? "subFocus" : "news"}
                >
                  기사
                </a>
              </Link>
            </li>
            <li>
              <Link href="/with/notice" prefetch={false}>
                <a
                  onClick={subMenuHandler}
                  className={subFocus === "notice" ? "subFocus" : "notice"}
                >
                  공지사항
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </MenuDiv>
  );
};

export default Header;
