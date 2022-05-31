import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {AccountBox} from "@material-ui/icons";
// import {ExitToAppIcon} from '@material-ui/icons';
// import {LogoutIcon} from '@mui/icons-material/Logout';

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
            {/* <HoverButton Icon={ExitToAppIcon} variant={"text"} text={"Log Out"}/> */}
            {/*<HoverButton Icon={Explore} variant={"text"} text={"About"}/>*/}
        </div>
    );
}
export default DropDownProfile;