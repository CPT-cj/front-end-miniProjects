import "./Other.css";
import React from "react";

export default class other extends React.Component {
  constructor() {
    super();
    this.state = { age: 19 };
  }

  render() {
    //   if (this.state.age < 18) {
    //     return <h1>شما مجاز به دادن نیستید</h1>;
    //   } else {
    //     return <h1>شما مجاز به دادن هستید</h1;
    //   }
    // ---------------------------------------------------------
    //   let errorMessage = null;
    //   if (this.state.age < 18) {
    //     errorMessage = <h1>شما مجاز به ورود نیستید</h1>;
    //   } else {
    //     errorMessage = <h1>شما مجاز به ورود هستید</h1>;
    //   }
    //   return <div>{errorMessage}</div>;
    // ----------------------------------------------------------
    // return (
    //   <div>
    //     {this.state.age < 18 && <h1>شما مجاز به ورود نیستید</h1>}
    //     {this.state.age >= 18 && <h1>شما مجاز به ورود هستید</h1>}
    //   </div>
    // );
    // -----------------------------------------------------------
    return (
      <div>
        permition statu for login : {this.state.age < 18 ? `No` : "Yes"}
      </div>
    );
  }
}
