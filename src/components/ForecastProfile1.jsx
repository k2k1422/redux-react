import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fontWeight } from '@material-ui/system';
import '../css/ForecastProfile1.css';
import editIcon from "../icons/edit_icon.svg";
import viewIcon from "../icons/save_Icon.png";
import saveIcon from "../icons/view_icon.webp";
import homeIcon from "../icons/home.svg";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    topBar: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: "24px",
        backgroundColor: "#f1f1f1",
        paddingTop: "8px",
        fontWeight: "bold",
        marginBottom: "30px"
    },
    topMiddleBar: {
        marginLeft: "1.3%",
        marginRight: "1.3%",
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: "22px",
        paddingTop: "8px",
        marginBottom: "30px",
        borderRadius: "5px",
    },
    bottomDownBar: {
        marginLeft: "1.3%",
        marginRight: "1.3%",
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: "#f1f1f1",
        fontSize: "22px",
        paddingTop: "8px",
        marginBottom: "30px",
        borderRadius: "5px",
    },
    bottomMiddleBar: {
        marginLeft: "1.3%",
        marginRight: "1.3%",
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: "#f1f1f1",
        fontSize: "22px",
        paddingTop: "8px",
        marginBottom: "30px",
        borderRadius: "5px",
    },
    gridContainerSpacing: {
        marginTop: "9px",
    },
    gridSpacing: {
        marginTop: "15px"
    },
    bottomMiddleBar: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginLeft: "2.5%",
        marginRight: "2.5%",
        backgroundColor: "#f1f1f1",
        fontSize: "22px",
        paddingTop: "8px",
        marginBottom: "30px",
        borderRadius: "5px",
    }
}));


export default function ForecastProfile() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={8} sm={8}>
                    <div className={classes.topBar}>
                        <div className="headingText">
                            Forecast Profile
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <div className={classes.topBar}>
                        <div className="imgIcons">
                            
                            <img src={homeIcon} alt="xyz" />
                            <img src={viewIcon} alt="xyz" />
                            <img src={editIcon} alt="xyz" />
                            <img src={saveIcon} alt="xyz" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <div className={classes.topMiddleBar}>
                        <Grid container className={classes.gridContainerSpacing}>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}><div className="textSize">
                                Demand planing Table
                            </div></Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <select name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Description:
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridSpacing}>
                                <div className="textSize">
                                    it's a demo description
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridContainerSpacing}>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}><div className="textSize">
                                Profile Name
                            </div></Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <input type="text" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Description:
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridSpacing}>
                                <input type="text" className="desProfile" name="Profile name" />
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridContainerSpacing}>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}><div className="textSize">
                                Forecast Key Figure
                            </div></Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <select name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Description:
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridSpacing}>
                                <div className="textSize">
                                    it's a demo description
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridContainerSpacing}>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}><div className="textSize">
                                History Key Figure
                            </div></Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <select name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Description:
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridSpacing}>
                                <div className="textSize">
                                    it's a demo description
                                </div>
                            </Grid>
                            <Grid container className={classes.gridContainerSpacing}>
                                <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                    <div className="textSize">
                                        Period Indicator
                                </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                    <select className="period">
                                        <option value="">Week</option>
                                        <option value="">Month</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} className={classes.gridSpacing}>
                                    <div className="textSize">
                                        Weekly bucket or monthly bucket
                                </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.bottomMiddleBar}>
                        <Grid container>
                            <Grid item xs={12} sm={12} className={classes.gridSpacing}>
                                <div className="textHeadingSize">Forecast Horizon</div>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <div className="textSize"> Period</div>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <input className="horizonTextBox" type="text" name="" />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <div className="textSize">25 Months/Weeks</div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.bottomMiddleBar}>
                        <Grid container>
                            <Grid item xs={12} sm={12} className={classes.gridSpacing}>
                                <div className="textHeadingSize">History Horizon</div>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <div className="textSize">Period</div>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <input className="horizonTextBox" type="text" name="" />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.gridSpacing}>
                                <div className="textSize">25 Months/Weeks</div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <div className={classes.bottomDownBar}>
                        <Grid container>
                            <Grid item xs={12} sm={12} className={classes.gridSpacing}>
                                <div className="textHeadingSize">
                                    Model Parameter
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Forecast Model
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <select className="horizonTextBox" name="" id="">
                                    <option value="">Planing Table</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} className={classes.gridSpacing}>
                                <div className="textSize">
                                    Descriptions:
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridSpacing}>
                                <div className="textSize">
                                    about the Description
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}