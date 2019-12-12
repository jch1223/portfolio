import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store/modules";
import Examples from "../components/examples";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    console.log("reduxStore", reduxStore);
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <Title>page</Title>
        <Examples />
      </>
    );
  }
}

export default connect()(Index);
