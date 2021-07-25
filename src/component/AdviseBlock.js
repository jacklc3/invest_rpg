import React from "react";
import "./AdviseBlock.css";

const text = [
  "Dollar cost averaging is an investment strategy of making regular investments over time as opposed to a lump sum all at once. It can help reduce the impact of volatility on large purchases of financial assets such as equities because your investments will be averaged out across the market when it is low and high.",
  "Emotional well-being in the US increased as salary increased, but it levelled off after the person achieved an annual income of $75,000USD (a study by Daniel Kahneman and Angus Deaton found in 2010).",
  "Richard Thaler, Noble Prize winner of Economics, says 'to <b>buy a diversified portfolio heavily tilted toward stocks, especially if they are young, and then scrupulously avoid reading anything in the newspaper<b/> aside from the sports section. Crossword puzzles are acceptable, but watching cable financial news networks is strictly forbidden.'",
  "Automatically transfer income into investments or a separate savings account so you are not tempted to use money now at the expensive of more reward in the future. If we leave the money in an accessible account, we will likely submit to temptation.",
  "It's founded on the assumption that our future resources are sure to be far more abundant than our present resources. A host of new and wonderful opportunities open up if we can build things in the present using future income.",
  "The average 18 to 34-year-old’s earnings rose 35% after relocating overseas... Three locations - Hong Kong, the United Arab Emirates, and the U.K. - particularly stood out in this year’s report for their skills and earnings potential.",
  "Save 20 percent, spend 80 percent. Saving does not mean hiding your money under a pillow, it means investing in the future.",
  "Diversify as broadly as you can - far more than experts tell you.",
  "To diversify, one Noble Prize formula beating option is to allocate your money equally to each of N funds. Just split money equally across investments for example One third in stocks, one third in bonds, one third in real estate. This is the 1/N rule. Here it is allocating your money equally between stocks, bonds and real estate. You can change how simple you make it.",
  "The 'rule of thumb' is <b>homeowners will be stressed with repayments above 30 per cent of their pre-tax income<b/>.",
  "Compound interest is a fundamental component of wealth creation and by understanding just this one principle, you can make a significant difference to your financial independence over the long term. Compound interest means that you receive interest, not only on your initial investment, but also on the prior interest added to your investment."
]

export default class AdviseBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {i: 0};
    setInterval(this.increment.bind(this), 10000);
  }

  increment() {
    if (this.state.i === text.length - 1) {
      this.setState({i: 0});
    } else {
      this.setState({i: this.state.i+1});
    }
  }

  render() {
    return (
      <div className="component-adviseblock">
        <div className="component-advisescroll" onClick={ this.increment.bind(this) }>
          <div className="component-advisetext">{text[this.state.i]}</div>
        </div>
      </div>
    );
  }
}