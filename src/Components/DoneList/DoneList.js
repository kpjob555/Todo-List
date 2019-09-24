import React from 'react';
import './DoneList.css';
//import List from './List/List';



const doneList = ( props ) => {

        return (
            <div className="DoneList">
                
                <table>
                    <tr>
                        <th style={{borderRadius: '10px 0px 0px 0px'}}>Finished Lists</th>
                        <th style={{borderRadius: '0px 10px 0px 0px'}}>Time Stamps</th>
                    </tr>
                
                    <tr>
                        <td style={{borderRadius: '0px 0px 0px 10px'}}>{props.finishList}</td>
                        <td style={{borderRadius: '0px 0px 10px 0px'}}>{props.getTime}</td>
                    </tr>
                </table>
            </div>)
    
}

export default doneList;