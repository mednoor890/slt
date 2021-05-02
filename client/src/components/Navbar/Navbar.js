import React ,{ useState, useEffect }from 'react'
import { AppBar,Avatar,Button,Typography,Toolbar } from '@material-ui/core'
import useStyles from "./styles"
import * as actionType from '../../constants/actionTypes';
import { useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import {Link, useHistory, useLocation  } from "react-router-dom";



function Navbar() {
  
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes=useStyles()
    const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
      };
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    
    return (
        <>
            <AppBar className={classes.appBar} position ="relative" >
                <div className={classes.brandContainer}>
                <Typography component ={Link} to ="/" className={classes.heading} variant="h2" align='center'><div className={classes.noor}>ACT</div>ivities</Typography>
                <Typography component ={Link} to ="/activites" className={classes.add}  variant="h6" align='center'>Ajouter une activitee
                </Typography>
</div>



<Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.Nom} src={user?.result.selectedFile}>{user?.result.Nom.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.Nom}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ):(
            <Button component={Link} to="/auth" variant ="contained" color='primary'> register</Button>
        )
        
        }

    </Toolbar>

 </AppBar>

        </>
    )
}

export default Navbar
