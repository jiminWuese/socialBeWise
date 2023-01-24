import "./rightBar.scss";
import friend from '../../assets/friend.png'

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Top Investments</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <span>beWise Housing</span>
                        </div>
                        <div className="buttons">
                            <button>View</button> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <span>beWise Housing</span>
                        </div>
                        <div className="buttons">
                            <button>View</button> 
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                    <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                    <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                    <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                    <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                     <div className="activity">
                        <div className="activityInfo">
                            <img src={friend} alt="" />
                            <p>
                                <span>107 people </span>
                                invested
                            </p>
                        </div>
                        <span> 30 minutes ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Members Online</span> 
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div><div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend} alt="" />
                            <div className="online"/>
                                <span>Jimin Zoe</span>
                                
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;