import React from 'react';
import '../css/ForecastProfile.css';
import editIcon from "../icons/edit_icon.svg";
import viewIcon from "../icons/save_Icon.png";
import saveIcon from "../icons/view_icon.webp";


class ForecastProfile extends React.Component {
    render() {
        return (
            <div className="bodyContant">
                <div className="topBar">
                    <div className="topbarheading">Forecast Profile</div>
                    <div className="imgIcons">
                        <img src={viewIcon} alt="xyz" />
                        <img src={editIcon} alt="xyz" />
                        <img src={saveIcon} alt="xyz" />
                    </div>
                </div>
                <div className="topMiddleBar">
                    <table className="demandPlaning">
                        <tr>
                            <td>Demand planing Table</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </td>
                            <td className="tdDescription">Description:</td>
                        </tr>
                        <tr>
                            <td>Profile Name</td>
                            <td>
                                <input type="text" name="Profile name"/>
                            </td>
                            <td className="tdDescription">Description: <input type="text" className="desProfile" name="Profile name" /></td>
                        </tr>
                        <tr>
                            <td>Forecast Key Figure</td>
                            <td>
                                <select name="" id="">
                                    <option value="">All Key Figures</option>
                                </select>
                            </td>
                            <td className="tdDescription">Description:</td>
                            
                        </tr>
                        <tr>
                            <td>History Key Figure</td>
                            <td>
                                <select name="" id="">
                                    <option value="">All Key Figures</option>
                                </select>
                            </td>
                            <td className="tdDescription">Description:</td>
                            
                        </tr>
                        <tr>
                            <td>Period Indicator</td>
                            <td>
                                <select className="period">
                                    <option value="">Week</option>
                                    <option value="">Month</option>
                                </select>
                            </td>
                            
                        </tr>
                    </table>
                </div>
                <div className="bottomMiddleBar">
                    <div className="horizonBLock1">
                        <div className="horizonHeading">Forecast Horizon</div>
                        <div className="horizonText">Period
                    <input className="horizonTextBox" type="text" name=""/>25 Months/Weeks</div>
                    </div>
                    <div className="horizonBLock2">
                        <div className="horizonHeading">History Horizon</div>
                        <div className="horizonText">Period
                    <input className="horizonTextBox" type="text" name=""/>25 Months/Weeks</div>
                    </div>
                </div>
                <div className="horizonBLock3">
                    <div className="horizonHeading">Model Parameter</div>
                    <div className="horizonText">Forecast Model
                        <select className="model" name="" id="">
                            <option value="">All Model</option>
                        </select>
                        Description:
                    </div>
                    <div className="horizonText">
                        Alpha<input className="horizonTextBox" type="text"/>
                        Beta<input className="horizonTextBox" type="text" />
                        Gamma<input className="horizonTextBox" type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForecastProfile;