import "./navBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PeopleIcon from '@mui/icons-material/People';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from "react-router-dom";
import jimin from './jimin.png';
import { NotificationAddOutlined, PublicOffOutlined } from "@mui/icons-material";


import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>beWise</span>
                </Link>
                    <HomeOutlinedIcon />
                    <PublicOffOutlined />
                    <GroupOutlinedIcon />
                    {darkMode ? <NightlightRoundOutlinedIcon  onClick={toggle} /> : <LightModeOutlinedIcon onClick={toggle}/>}
                    <div className="search">
                        <SearchIcon />
                        <input type="text" placeholder="search..." />
                    </div>
            </div>
            <div className="right">
                <PersonIcon/>
                <MailOutlineIcon />
                <NotificationAddOutlined />
                <div className="user">
                    <img src={jimin} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;