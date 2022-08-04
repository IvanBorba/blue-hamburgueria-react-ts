import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuContainer>
      <img alt="logo" src={logo} />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuItemButton onClick={() => navigate("/login")}>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
