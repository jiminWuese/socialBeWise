import "./leftBar.scss";
import jimin from '../navBar/jimin.png';
import menuLeftIcon1 from '../../assets/1.png';
import menuLeftIcon2 from '../../assets/2.png'; 
import menuLeftIcon3 from '../../assets/3.png'; 
import menuLeftIcon4 from '../../assets/4.png';  
import menuLeftIcon5 from '../../assets/5.png';
import menuLeftIcon6 from '../../assets/6.png';
import menuLeftIcon7 from '../../assets/7.png'; 
import menuLeftIcon8 from '../../assets/8.png'; 
import menuLeftIcon9 from '../../assets/9.png';  
import menuLeftIcon10 from '../../assets/10.png';
import menuLeftIcon11 from '../../assets/11.png';
import menuLeftIcon12 from '../../assets/12.png';
import menuLeftIcon13 from '../../assets/13.png';  
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
    const { currentUser } = useContext(AuthContext)

    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={jimin} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon1} alt="" />
                        <span>friends</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon2} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon3} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon4} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon5} alt="" />
                        <span>memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={menuLeftIcon6} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon7} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon8} alt="" />
                        <span>Galary</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon9} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon10} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={menuLeftIcon11} alt="" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon12} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={menuLeftIcon13} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;