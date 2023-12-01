 const Title = () => (
    <a href="/">
      <img
        className="logo"
        src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=826&t=st=1701241939~exp=1701242539~hmac=6d7b7bdc01f45972d2974e5ea0264332803ca5cfe89f9ebd609df1cb8e603b30"
        alt="logo"
      />
    </a>
  );


   const Header = () => {
    return (
      //including a react element in a react component
  
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
   export default Header;