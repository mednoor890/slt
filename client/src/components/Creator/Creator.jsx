import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import ActivitePost from '../ActivitePosts/ActivitePost/ActivitePost';
import { getPostsByCreator } from '../../actions/posts';

const Creator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const  posts = useSelector((state) => state.posts);
  useEffect(() => {
  
      dispatch(getPostsByCreator(name));
    
  }, []);

 if (posts.length ) return 'No posts';

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {!posts.length ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <ActivitePost post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Creator;