import React, { Component } from 'react';
import ALLButton from './Button/Button';
import { Button } from '@material-ui/core';

class TodoItems extends Component  {

    state = {
        textSomething: '',
        isEdit: false,
    }

    clickDoneList= () => {
        return this.props.clickDone
    }

    render() {

        let showTodoName = this.props.todoName;
        let editTodoBox, editTodoButton = null;
        let isDone = null;
        
        const buttonAll =  ( <ALLButton
                                doneSet = {this.props.clickDone}
                                editSet = {() => this.setState({isEdit: !this.state.isEdit})}
                                deleteSet = {this.props.delete}
                               
            /> );
        
        let setButton = this.state.isDoneYet ? null: buttonAll;
        
        if(this.state.isEdit) {
            showTodoName = null;
            editTodoBox =(
                <input 
                    style={{
                        height:' 35px',
                        width: '50%',
                        margin: '20px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        boxShadow: '1px 1px 3px',
                        fontSize: '18px',
                        border: '0ch',
                    }}  
                    type='text' 
                    onChange={(event) => this.setState({textSomething: event.target.value})} 
                    value={this.props.editValue} 
                    placeholder={this.props.todoName} />
            )
            editTodoButton = (
                <Button 
                    variant='contained'                
                    onClick={() => (
                    this.props.editTextChange(this.state.textSomething)) + 
                    this.setState({isEdit: false} 
                    //,console.log(this.state.textSomething)
                        )} > OK </Button>
            ) 
            
        }

        return (
            <div style={{   background: 'linear-gradient(90deg, rgba(0,128,255,0.31416316526610644) 0%, rgba(14,56,97,0.35898109243697474) 100%)',
                            margin:'20px',
                            padding: '20px',
                            borderRadius: '15px',
                            boxShadow: '2px 2px 3px',
                            

            }}>
                <h3 style={{    background: 'radial-gradient(circle, rgba(0,0,0,0.40940126050420167) 0%, rgba(207,220,255,0.4290091036414566) 100%)',
                                color:'white',
                                margin:'10px',
                                padding: '10px',
                                height: 'auto',
                                borderRadius: '10px',
                                textAlign:'center'
            }}>List No. {this.props.itemID+1}</h3>

                    <ul style={{    background: 'radial-gradient(circle, rgba(255,255,255,0.6362920168067228) 0%, rgba(255,255,255,0.20772058823529416) 100%)',
                                    color:'Black',
                                    margin:'10px',
                                    padding: '30px',
                                    height: 'auto',
                                    borderRadius: '10px',
            }}>
                        {isDone}
                        {showTodoName}
                        {editTodoBox}
                        {editTodoButton}
                    </ul>            
                {setButton}              
            </div>
        )}
}

export default TodoItems;