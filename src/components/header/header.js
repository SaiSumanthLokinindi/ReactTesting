import classes from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={classes["wrap"]} data-test="wrap">
        <div className={classes["logo"]} data-test="logo">
          Header
        </div>
      </div>
    </header>
  );
};

export default Header;
