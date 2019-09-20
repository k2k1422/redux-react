import React from 'react';
import '../css/ForcastProfile.css';
import editIcon from "../icons/edit_icon.svg";
import viewIcon from "../icons/save_Icon.png";
import saveIcon from "../icons/view_icon.webp";


class ForcastProfile extends React.Component {
    render() {
        return (
            <div className="bodyContant">
                <div className="topBar">
                    <div className="topbarheading">Forcast Profile</div>
                    <img src={viewIcon} alt="xyz" />
                    <img src={editIcon} alt="xyz" />
                    <img src={saveIcon} alt="xyz" />
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
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Profile Name</td>
                            <td>
                                <input type="text" name="Profile name" value="Profile Name" id="" />
                            </td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Forcast Key Figure</td>
                            <td>
                                <select name="" id="">
                                    <option value="">All Key Figures</option>
                                </select>
                            </td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>History Key Figure</td>
                            <td>
                                <select name="" id="">
                                    <option value="">All Key Figures</option>
                                </select>
                            </td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Period Indicator</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="bottomMiddleBar">
                    <div className="horizonBLock1">
                        <div className="horizonHeading">Forcast Horizon</div>
                        <div className="horizonText">Period
                    <input className="horizonTextBox" type="text" name="" value="25" id="" />25 Months/Weeks</div>
                    </div>
                    <div className="horizonBLock2">
                        <div className="horizonHeading">Forcast Horizon</div>
                        <div className="horizonText">Period
                    <input className="horizonTextBox" type="text" name="" value="25" id="" />25 Months/Weeks</div>
                    </div>
                </div>
                <div className="horizonBLock3">
                    <div className="horizonHeading">Model Parameter</div>
                    <div className="horizonText">Forcast Model
                        <select className="model" name="" id="">
                        <option value="">All Model</option>
                        </select>
                        Description</div>
                </div>
            </div>
        );
    }
}

export default ForcastProfile;