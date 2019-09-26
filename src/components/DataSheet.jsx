import ReactDataSheet from 'react-datasheet';
import React from 'react';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

class DataSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: [
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
                [{ value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 3 }],
            ]
        }
    }
    render() {
        return (
            <ReactDataSheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    const grid = this.state.grid.map(row => [...row])
                    changes.forEach(({ cell, row, col, value }) => {
                        grid[row][col] = { ...grid[row][col], value }
                    })
                    this.setState({ grid })
                }}
            />
        )
    }
}

export default DataSheet;