import useStyles from './messageListStyle';
import { Typography, Card, CardContent } from '@material-ui/core';

const MessageList = ({ propsList }) => {
  const classes = useStyles();
  console.log(propsList);
  return (
    <Card className={classes.container}>
      {propsList.map((list) => (
        <CardContent key={list.id}>
          <Typography variant='body2' gutterBottom>
            Text : {list.text}
          </Typography>
          <Typography variant='body2' gutterBottom>
            Autor : {list.author}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
};

export default MessageList;
