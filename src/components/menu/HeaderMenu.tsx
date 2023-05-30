import { Layout } from "antd";
const { Header } = Layout
import ColorSwitch from "../switch/ColorSwitch";

const HeaderMenu = () => {

    return (
        <Header style={{background: "#ffffff"}}>
            <ColorSwitch />
        </Header>
    );
}

export default HeaderMenu;