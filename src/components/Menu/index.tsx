import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import HomeIcon from "../../assets/icons/home.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/logout.svg";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img alt="logo" src={logo} />
      <div>
        <img alt="logo" src={HomeIcon} />
        <img alt="logo" src={SettingsIcon} />
      </div>
      <img alt="logo" src={LogoutIcon} />
    </Styled.MenuContainer>
  );
};

export default Menu;
