import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DeleteIcon from 'material-ui-icons/Delete';
import OpenInNewIcon from 'material-ui-icons/OpenInNew';

import NotebookDetailsModal from './NotebookDetailsModal';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class NotebookCard extends React.Component {
  render() {
    const { classes, notebook } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={notebook.title}
            subheader={notebook.createdAt}
          />
          {!!notebook.image &&
            <CardMedia
              className={classes.media}
              image={notebook.image}/>
          }
          <CardContent>
            <Typography component="p">
              {notebook.desc}
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton>
              <DeleteIcon aria-label="Delete"/>
            </IconButton>

            <div className={classes.flexGrow} />

            <IconButton>
              <OpenInNewIcon aria-label="Open"/>
            </IconButton>

            <NotebookDetailsModal notebook={notebook}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

NotebookCard.propTypes = {
  notebook: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotebookCard);