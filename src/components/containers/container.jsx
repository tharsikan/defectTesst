import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';

import ProjectList from '../../screens/ManageProject/ProjectList';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function container({ textAlign, collapsed }) {
  const useStyles = {
    root: {
      marginTop: '5%',
      marginLeft: `${!collapsed ? '250px' : '100px'}`,
      background: '#fafafa',
      width: '100%',
      height: 'auto',
      zIndex: -1000,
      transition: 'left,0.5s',
    },
    gridContainer: {
      overflowY: 'auto',
    },
    subContainer:{
       marginLeft:`${collapsed?'2%':'-10%'}`,
       transition:'marginLeft,5s',

    }
  };
  return (
    <div style={useStyles.root}>
      <Grid direction="row" container justify="center" alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={4}>
        <Grid item xs={collapsed?12:10} style={useStyles.subContainer}>
          <ProjectList/>
        </Grid>
      </Grid>
    </div>  
  )
}


