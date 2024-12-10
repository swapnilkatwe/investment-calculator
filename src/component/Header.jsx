import logoImage from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logoImage} alt="Logo with money on bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
