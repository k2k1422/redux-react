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
import { stat } from 'fs';

const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 120,
        align: 'right',
        format: value => value.toLocaleString(),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 120,
        align: 'right',
        format: value => value.toLocaleString(),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 120,
        align: 'right',
        format: value => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}



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
    },
    tableHead: {
        width: '2rem',
        backgroundColor: "#FFFFFF",
        minWidth: 120,
        border:0,
        fontSize:14
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
            weeks: ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13"],
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
                                <TableCell className={classes.tableHead}>Weeks</TableCell>
                                {
                                    state.data.weeks.map((d1, i) => {
                                        return <TableCell className={classes.tableHead}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Sales Order</TableCell></TableHead>
                                {
                                    state.data.salesOrder.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Sales Adjustment</TableCell></TableHead>
                                {
                                    state.data.salesAdjustment.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}><input type="text" name="salesAdjustment" value={d1} id={i} onChange={onChangeText} /></TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Total Sales History</TableCell></TableHead>
                                {
                                    state.data.salesOrder.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{state.data.salesOrder[i] + state.data.salesAdjustment[i]}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Forcast</TableCell></TableHead>
                                {
                                    state.data.forcast.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{d1}</TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Forcast Adjustment</TableCell></TableHead>
                                {
                                    state.data.forcastAdjustment.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}><input type="text" name="forcastAdjustment" value={d1} id={i} onChange={onChangeText} /></TableCell>
                                    })
                                }
                            </TableRow>
                            <TableRow>
                                <TableHead className={classes.tableHead}><TableCell className={classes.tableHead}>Total Forcast</TableCell></TableHead>
                                {
                                    state.data.forcast.map((d1, i) => {
                                        return <TableCell className={classes.tableCell}>{state.data.forcast[i]+state.data.forcastAdjustment[i]}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableBody>

                    </Table>
                </div>
                <TablePagination
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
                />
            </Paper>
            <Button variant="contained" color="primary">
                Save
            </Button>
        </div>
    );
}