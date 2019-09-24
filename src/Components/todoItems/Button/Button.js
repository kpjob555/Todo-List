import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import './Button.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0.5),
    }
  }));

const ButtonDED = (props) => {

    const classes = useStyles();
    return(
            <div>
                <Button onClick={props.doneSet} variant="contained" className={classes.button} >DONE</Button>
                <Button onClick={props.editSet} variant="contained" color="primary" className={classes.button}>EDIT</Button>
                <Button onClick={props.deleteSet} variant="contained" color="secondary" className={classes.button}>DELETE</Button>
            </div>
            )
    };

export default ButtonDED;