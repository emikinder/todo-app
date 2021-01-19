import React, { useState } from "react";
import "./Todo.css";
import { Input, List, ListItem, ListItemText, Button, Modal, } from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "3px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set({
            todo: input,
        }, { merge: true });

        setOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={(e) => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Update todo</h1>
                    <Input
                        placeholder={props.todo.todo}
                        value={input}
                        onChange={(event) => setInput(event.target.value)} />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={updateTodo}>
                        Update
                    </Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="task" />
                </ListItem>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => setOpen(true)}>
                    Edit
                </Button>
                <DeleteForeverIcon
                    onClick={(event) =>
                        db.collection("todos").doc(props.todo.id).delete()} />
            </List>
        </>
    );
}

export default Todo;
