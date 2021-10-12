import React from "react";
import "rbx/index.css";
import {Footer,Content } from "rbx"

const  Footers = ()=> {
  return (
    <div>
     <Footer>
  <Content textAlign="centered">
    <p>
      <strong>rbx</strong> by <a href="https://github.com/dfee">Devin Fee</a>.
      The source code is released under the{' '}
      <a href="https://opensource.org/licenses/mit-license.php">
        MIT License
      </a>
      . The website content is licensed{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY NC SA 4.0
      </a>
      .
    </p>
  </Content>
</Footer>
    </div>
  );
}

export default Footers;
