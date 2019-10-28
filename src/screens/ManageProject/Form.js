import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import './Form.css';
import React from 'react'
import DatePick from './DatePick'

function Form() {
    return (
        <div className="hello">
            <h3 >Add Project</h3><hr/>
            <FormControl className="formControl">
            <InputLabel htmlFor="my-email">Project Name</InputLabel>
            <Input id="my-email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-email">Type</InputLabel>
            <Input id="my-email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-email">Duration</InputLabel>
            <Input id="my-email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-email">Status</InputLabel>
            <Input id="my-email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br/>      
            <DatePick name="Created Date" className="datePick"/>
            <DatePick name="End Date"/><br/><hr/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </div>
    )
}

export default Form