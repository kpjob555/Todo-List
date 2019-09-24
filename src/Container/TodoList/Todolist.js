import React, { Component } from 'react';
import AddTodo from '../../Components/AddTodo/AddTodo';
import DoneList from '../../Components/DoneList/DoneList';
import TodoItem from '../../Components/todoItems/todoItems';
import TodoHistory from '../../Components/History/History';
import { Route, Redirect } from 'react-router-dom';
import './TodoList.css';


class TodoList extends Component {

    state = {
        addTodo : '',
        addList : [],
        editText: '',
        historyAction: ['App Starting'],
        historyTime: [`${new Date().toLocaleString()}`],
        doneLists: [],
        doneTime:[]
    }


    addItemHandler = (todo) => {
        console.log('[ADD] : {' + todo + '}');
        const action = (<div>Add ITEM</div>);
        const time = (<div>{this.getTime()}</div>);
        this.setState({
            addList: this.state.addList.concat(todo),
            addTodo: '',
            historyAction:  this.state.historyAction.concat(action),
            historyTime: this.state.historyTime.concat(time)
        });
        
    }

    deleteItemHandler = (index) => {
       //console.log('Deleted Button Activated');
        const action = (<div>Delete ITEM</div>);
        const time = (<div>{this.getTime()}</div>);
        const deleteList = this.state.addList;
            deleteList.splice(index,1);
        this.setState({
            addList: deleteList,
            historyAction:  this.state.historyAction.concat(action),
            historyTime: this.state.historyTime.concat(time)
        })
    }

    editItemHandler = (textIncome, index) => {
        console.log('Edit Start! @ '+ textIncome + index);
        const action = (<div>Edit ITEM</div>);
        const time = (<div>{this.getTime()}</div>);
        const updateTodo = this.state.addList;
        updateTodo.splice(index,1);
        updateTodo.splice(index, 0, textIncome);

        this.setState({
            addList: updateTodo,
            historyAction:  this.state.historyAction.concat(action),
            historyTime: this.state.historyTime.concat(time)
        });
    }

    ClearItemHandler = () => {
        const action = (<div>Clear All List</div>);
        const time = (<div>{this.getTime()}</div>);
        this.setState({
            addList: [],
            historyAction:  this.state.historyAction.concat(action),
            historyTime: this.state.historyTime.concat(time)
        })
    }

    DoneListHandler = (list, index) => {
        const action = (<div>Task Finished</div>);
        const time = (<div>{this.getTime()}</div>);
        const updateDoneItem  = list;
        const updateOldList = this.state.addList;
        updateOldList.splice(index, 1);
        this.setState({
            doneLists: this.state.doneLists.concat(updateDoneItem),
            addList: updateOldList
        })
        this.updateTimeAction(action, time)
        alert('This task was finish! You can see it at DoneList');
    }

    getTime() {
        const currentTime = new Date().toLocaleString();
        return currentTime;
    }

    updateTimeAction(action, time) {
        this.setState({
            historyAction:  this.state.historyAction.concat(action),
            historyTime: this.state.historyTime.concat(time),
            doneTime: this.state.doneTime.concat(time)
        })
    }
    

    render() {

        const displayList = this.state.addList.map((list, index) => {
            
            return <TodoItem 
                        todoName= {list}
                        key= {index}
                        itemID={index}
                        clickDone={() => this.DoneListHandler(list, index)}
                        editTextChange ={(textIncome) => this.editItemHandler(textIncome, index)}
                        delete={() => this.deleteItemHandler(index)}
                />
                
        });

        const displayHistory = (<div>
            <TodoHistory 
                action={this.state.historyAction}
                time={this.state.historyTime}
                key={this.state.historyAction.map((ls, id) => {
                    return id;
                }) }
                />
        </div>);

        /*const showDoneList = this.state.doneLists.map((ls, id) => {
            return <div><DoneList 
                        finishList={ls}
                        getTime={this.state.doneTime}
                        key={id}
                    /></div>
        });
        */

        const showDoneList = (
            <div>
                <DoneList 
                    finishList={this.state.doneLists.map((ls) => {
                        return (<div>{ls}</div>);
                    })}
                    getTime={this.state.doneTime}
                    key={this.state.doneLists.map((ls, id) => {
                        return id;
                    })}
                />
            </div>
        )

        return(
            <div>
                <Route exat path='/add-todo' render={() => (
                    <div >
                        <AddTodo
                            value={this.state.addTodo}
                            changed={(event) => this.setState({addTodo: event.target.value})}
                            clicked={() => this.addItemHandler(this.state.addTodo)}
                            cleared={this.ClearItemHandler}
                            key={this.state.addList.map((ls,id) => {
                                return id;
                            })}
                />
                {displayList}
                    </div>
                )} >
                </Route>

                <Route path='/done-lists' render={() => (
                    <div style={{textAlign:'center'}}>
                        {showDoneList}
                    </div>
                )} />

                <Route path='/history' render={() => (
                    <div>
                        {displayHistory}
                    </div>
                )} />

                <Redirect from='/' to='/add-todo' />  
            </div>
        );
    }
}

export default TodoList;
