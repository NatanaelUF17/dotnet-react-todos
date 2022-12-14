import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function CardItem({ todo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="actions">
            <MoreVertIcon />
          </IconButton>
        }
        title={todo.title}
        subheader={`Created ${formatDistanceToNow(new Date(todo.createdAt))} ago`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon htmlColor='red' />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardItem;