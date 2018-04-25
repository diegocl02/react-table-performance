import React, { Component } from 'react';
import {Eye} from './randomIcon'


export default class TableView extends Component {

    data = [...this.props.data];

    constructor(props) {
        super(props)
        this.state = { color: "white", selectedIds: [], numberOfRows: 100 }
    }

    getCellStyle() {
        return {
            wordSpacing: 0,
            verticalAlign: "middle",
            borderLeft: "solid thin silver",
            borderTop: "solid thin silver",
            width: "5em",
            height: "1em",
            overflow: "hidden"
        }
    }

    getHeader() {
        return (
            <div style={{ display: "flex", flexDirection: "row", }}>
                <div key={"row-header"} style={this.getCellStyle()}> <b> Icon  </b></div>
                <div key={"row-header"} style={this.getCellStyle()}> <b> Row #  </b></div>
                {Object.keys(this.data[0]).map((el, index) => {
                    if (index > 0)
                        return <div key={el + index} style={this.getCellStyle()}> <b> {el}  </b></div>
                    else
                        return null
                }
                )}
            </div>
        )
    }

    onRowClicked(index) {
        let newSelectedIds = [...this.state.selectedIds]
        if (newSelectedIds.includes(index)) {
            newSelectedIds = newSelectedIds.filter((ele) => ele !== index)
        } else {
            newSelectedIds = [...newSelectedIds, index]
        }
        this.setState({ color: "SkyBlue", selectedIds: newSelectedIds })

    }

    getDataGrid() {
        return (
            <div style={{ height: "700px", overflow: "scroll" }}>
                {this.data.map((obj, index) => {
                    if (index < this.state.numberOfRows + 1) {
                        return (
                            <div
                                key={"row-" + index}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    cursor: "pointer",
                                    backgroundColor: this.state.selectedIds.includes(index)
                                        ? this.state.color : index % 2 === 0 ?
                                            "inherit" : "whitesmoke"
                                }}
                                onClick={() => this.onRowClicked(index)}>
                                <div key={"col-" + index} style={this.getCellStyle()}> <Eye size={"1.2em"}/> </div>
                                <div key={"col-" + index} style={this.getCellStyle()}> {index} </div>
                                {Object.keys(obj).map((el, index) => {
                                    if (index > 0)
                                        return <div key={el + index} style={this.getCellStyle()}> {obj[el]} </div>
                                    else
                                        return null
                                })}
                            </div>)
                    } else {
                        return null
                    }
                })}

            </div>
        )
    }

    numberOfRowsPicker() {
        return (
            <label>
                Select number of Rows from 1 - 1000:
            <input type="number" value={this.state.numberOfRows}
                    onChange={(e) => { this.setState({ numberOfRows: Number(e.target.value) }) }}
                // onKeyPress={(e) => {
                //     if(e.key === 'Enter')
                //         this.setState({numberOfRows: e.target.value})
                //     }}
                />
            </label>
        )
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", paddingLeft: "5em" }}>
                {this.numberOfRowsPicker()}
                {this.getHeader()}
                {this.getDataGrid()}
                {}
            </div>
        )

    }
}