import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import '../css/StickyHeadTable.css';

const useStyles = makeStyles(theme =>({
    root: {
        width: '80%',
        paddingTop: theme.spacing(2),
        paddingRight:theme.spacing(2),
        paddingLeft:theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
        paddingTop: theme.spacing(50),
        paddingBottom: theme.spacing(2),
    },
    tableWrapper: {
        maxHeight: 407,
        overflow: 'auto',
    },
    tableCell: {
        width: '2rem',
        height: '2rem',
        fontSize:'0.775rem',
    },
    tableHead: {
        width: '2rem',
        backgroundColor: "#FFFFFF",
        minWidth: 50,
        border:0,
        fontSize: '0.775rem',
        color: "#000000",
        fontWeight:"bold",
    },
    tableHeadHeading:{
        width: '2rem',
        backgroundColor: "#FFFFFF",
        minWidth: 120,
        border: 0,
        fontSize: '0.775rem',
        color: "#000000",
        fontWeight: "bold",
    },
    table: {
        minWidth: 650,
    },
}));

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [state, setState] = React.useState({
        data: {
            weeks: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9", "Week10", "Week11", "Week12", "Week13", "Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9", "Week10", "Week11", "Week12", "Week13"],
            salesOrder: [120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534, 120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534],
            salesAdjustment: [120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534, 120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534],
            forcast: [120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534, 120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534],
            forcastAdjustment: [120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534, 120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534],
            promostion: [120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534, 120, 230, 213, 321, 312, 234, 423, 432, 324, 234, 345, 543, 534],
        }
    });

    const onChangeText = (event) => {
        var data,text,name,index;
        text=event.target.value;
        name=event.target.name;
        index=parseInt(event.target.id);
        console.log(text,name,index);
        console.log(state);
        data={...state};
        if(name==="salesAdjustment"){
            data.data.salesAdjustment[index]=parseInt(text);
        }
        else if(name==="forcastAdjustment"){
            data.data.forcastAdjustment[index] = parseInt(text);
        }
        setState(data);

    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <h1>Demand planing</h1>
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeadHeading}>Weeks</TableCell>
                                {
                                    state.data.weeks.map((d1, i) => {
                                        return <TableCell className={classes.tableHead}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Sales Order</TableCell></TableHead>
                                {
                                    state.data.salesOrder.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Sales Adjustment</TableCell></TableHead>
                                {
                                    state.data.salesAdjustment.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}><input type="text" name="salesAdjustment" value={d1} id={i} onChange={onChangeText} /></TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Total Sales History</TableCell></TableHead>
                                {
                                    state.data.salesOrder.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{state.data.salesOrder[i] + state.data.salesAdjustment[i]}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Forcast</TableCell></TableHead>
                                {
                                    state.data.forcast.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Forcast Adjustment</TableCell></TableHead>
                                {
                                    state.data.forcastAdjustment.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}><input type="text" name="forcastAdjustment" value={d1} id={i} onChange={onChangeText} /></TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHeadHeading}><TableCell className={classes.tableHeadHeading}>Total Forcast</TableCell></TableHead>
                                {
                                    state.data.forcast.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{state.data.forcast[i]+state.data.forcastAdjustment[i]}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableBody>

                    </Table>
                </div>
                {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={12}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}
            </Paper>
            <Button variant="contained" color="primary">
                Save
            </Button>
        </div>
    );
}