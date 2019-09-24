import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './AddTodo.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0.5),
    },
    input: {
      display: 'none',
    },
  }));

const AddTodo = ( props ) => {
    
    const classes = useStyles();
    
    return <div className="AddTodo" >
        <input  type='text' onChange={props.changed} value={props.value} placeholder=' Input Your Task' />
        <Button type='submit' variant="contained" color="primary" onClick={props.clicked} className={classes.button}>ADD</Button>
        <Button type='submit' variant="contained" color="secondary" onClick={props.cleared} className={classes.button} >CLEAR ALL</Button>
    </div>
}

export default AddTodo;

