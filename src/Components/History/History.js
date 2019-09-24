import React, { Component } from 'react';
import './History.css';

class HistoryTodo extends Component {

    render() {

        return(
            <div className="History">
                
                <table>
                    <tr>
                        <th style={{borderRadius: '10px 0px 0px 0px'}}>Actions</th>
                        <th style={{borderRadius: '0px 10px 0px 0px'}}>Time</th>
                    </tr>
                
                    <tr>
                        <td style={{borderRadius: '0px 0px 0px 10px'}}>{this.props.action}</td>
                        <td style={{borderRadius: '0px 0px 10px 0px'}}>{this.props.time}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default HistoryTodo;