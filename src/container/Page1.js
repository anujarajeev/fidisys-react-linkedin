
import React, { Component } from 'react';
import About from "./header/About";
import Search from "./header/Search";
import Others from "./header/Others";
import Profile from "./header/Profile";
import Content from "./containerBox/Content";
import Title from "./containerBox/Title";
import Skill from "./containerBox/Skill";


class Page1 extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="icon">
            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAB4CAMAAAA678W5AAAAY1BMVEX///8Ad7cAcbU2f7ri6/NmnMkAc7Xv9foAabF2ps85i8Jnoc0AdbZBjMIAbrNhmceNuNeHs9ZUksQ/hb0AZrAwfbuyzOP4+v0qhL7X5vKewd51rNN0oMxRjcG/1uiDrtPM3+5SWShsAAAD6UlEQVR4nO2d0XKrIBCGBRVNpWhMjJo0yvs/5dG2SVGXTGYOCgj/RW/cJn4BZdldIAi83lESra1EO2JRnsK1dSoLnaBJcWaEorVFCTvr42zvbH3EX1B2b/VAJhXZiHEUqbS0ZlLiDSERwqUOzAvbFBIhdtkesm627K+jSFNvTtmeN4ZE6Lz9C+i6dYcduux1c8rbtu+eUfi2OWWmgTLbnDKWUFIyiK7iLeDYDEqCw3sex+WJrvHUmkFJ0/LajkN3HXU9Vs9pBCUhF2FAazPlmCZQ4nzmgV2JYr/BAEq2dDMvu6MkH4AvfVU72uinRBwyUjtt0U6JD6BRq/QNpJ8SdqTrg8rG1E1JGonVZU+UDO6wQcDDHVGmsml89KnQo9VO2UmskrvCMVM35ZlLrHZFKe2xyX1HPZYdJVZtsyNKN0YSuVeg0vnRTwl32UhpaEQ7JW3AxpQFhyylRLgEAt+XVCWkAZSILYOlvFIbyjOAcvBlZ/NojncXKxgxS9HPi4pdRreGu0BfD86kOGHlkWczKBElKStvxz5D6Rq5eEMov0EZY6ofSOMo15TtlJQQPHQB/DpObQTld2cVJD6ZFMuv4TRtyjzr+0NWNuzMpKQmUBKaHUX1zd9bFoe3ybXbsyiBYHTroqSuB9dp+JMkfPg/SaWUAZQ0jOYmxwcKkF79CWFidODLj+aHChxrDaAE6lSe4RC6+AGCaJxepzmHP7zNUqA5DaBMgTzJb8wZyqEkOaH4RQHPhS4fTxspcSUL/H2rDReYNlKm/PUX8EWZn4WU95ctOYrPAw0WUr5RVHdNbad8R/Us/blPyoC70JZBnREHKIMOu0AZTAbN3VJOgke7pWzTvVDWLwq1EzFnZi9l13/F8VfBJZcnRSa2UnYhwWM9LcEfkpp0sXDcUsoifb5CiWQa1hHbKScF/gROgfLKcspuOuUgFfQWik5/VlZSzksRMbSQQiwysZGynSc3SQw1Zm53W5bzUACtoCczt7otk2UKl0Hhg9hqym4ZigRXOB2spiyWeRYgaT9ZaWUhZQ9keSGK3mbKOl5Glckn8D1HmymT3FMKcoOy8JSry1M+5Ck9pShPub485UOe0lOK8pTry1M+5Ck9pShPub485UOe0lOK8pTry1M+5Ck9pShPub7eoiT/T2lWngRIJEefPyQUKOWBNqWgGPilzMq4U8RnFtGzhg6X88VBUQytcWLx3K6+IqNqRIa7yTNR8Unoa6dYem3SZ2d2WYnMqqkc73GqycrEF9fQC7uJoQZKN3ZWdWOXXDd2PHZj92o3diJ3Y1d5R04IcOO0B0dO7nDkFJbAjRN1fkD3fzqSJfoH+M1iAYbj5bkAAAAASUVORK5CYII="}/>
          </div>
          <About/>
          <Search/>
          <Profile/>
          <Others/>
        </header>
        <div className="container">
          <Title/>
          <Content/>
          <Skill/>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Page1;








