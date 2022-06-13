import React from "react";
import {MarketingButton} from "../styles/Button";
import {Wrapper} from "../styles/Header";
import {FlexColumnCenter, FlexCenter} from "../styles/Grid";
import Card from "./Card";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <Wrapper>
        <Card>
          <FlexColumnCenter>
          <h1>The path to your next</h1>
          <h2>Open Source</h2>
          <h1>contribution and more pizza.</h1>
            <br />
            <FlexCenter>
            <MarketingButton alt="pizza" primary onClick={handleLogIn}>
              Login with GitHub
            </MarketingButton>
          </FlexCenter>
          </FlexColumnCenter>
        </Card>
      </Wrapper>
   </React.Fragment>
  );
}

export default Hero;
