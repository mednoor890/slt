import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPostAss } from '../../actions/associations';
import Association from '../Associations/Associations';


const ListeAssociations = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAss());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Association setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  );
};

export default ListeAssociations;