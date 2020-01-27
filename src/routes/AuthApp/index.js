import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import useToggle from './../../hooks/useToggle'
import Drawer from './../../components/Drawer'
import Home from '../../views/Home'
import Layers from '../../views/Layers'
import NotFound from '../../views/NotFound'
import AppBar from '../../components/AppBar'

import { itemList } from './../../utils/mockData'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
  }))

export default function AuthApp() {
    const [isDrawerOpen, setIsDrawerOpen] = useToggle(false)
        
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar 
                    isDrawerOpen={isDrawerOpen} 
                    toggleDrawer={setIsDrawerOpen} 
                />
                <Drawer 
                    isOpen={isDrawerOpen} 
                    toggleDrawer={setIsDrawerOpen} 
                    itemList={itemList}
                    />
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>                    
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Layers" component={Layers} />
                        <Route component={NotFound} />                    
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
