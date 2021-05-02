import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/ActivitePost';
import ActivitePosts from '../ActivitePosts/ActivitePosts';
import Form from '../Form/FormActivite'

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
//useEffect feha fonction hiya ela t7adedlek kifech besh tetbadel lstate mta3ek
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <Container>
                    <Grid >

            <ActivitePosts setCurrentId={setCurrentId} />
</Grid>
</Container>
      
  );
};

export default Home;
