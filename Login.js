import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const validationSchema = yup.object({
    fullname: yup
    .string('Enter your Full Name')
    .required('Name is required'),
    email: yup
      .string('Enter your email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(9, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
      message: yup
      .string('Enter your email')
      .required('Email is required'),
  });
  
function Login() {
   const [Data, setData] = useState([])
  const formik = useFormik({
    initialValues: {
      fullname:'',
      email: '',
      password: '',
      message:'',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
     setData(values)
    },
  });
  console.log(Data)
    return (
      <div className="formic" >
      <Grid container spacing={0}>
        <Grid item xs={3} >
     <h2 className="p1"style={{textAlign:"center"}}>LOGIN</h2>
   <br/>   <form  className="form" onSubmit={formik.handleSubmit}>
        
   <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
       <br/> 
       <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.password)}
          helperText={formik.touched.email && formik.errors.passwprd}
        />
<br/>
<br/>
        <Button className= "btn" color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      
      </form>
    
        </Grid>
  
      </Grid>
        </div>
    )
}
export default Login
