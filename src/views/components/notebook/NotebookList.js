import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import NotebookCard from './NotebookCard';
//
// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   titleBar: {
//     background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//     'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
//   icon: {
//     color: 'white',
//   },
// });

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  subroot: {
    maxWidth: '100%'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function AdvancedGridList(props) {
  const {classes, notebooks, toggleModal, select, show} = props;

  return (
    <div className={classes.root}>
      <Grid className={classes.subroot} container spacing={24}>
        {notebooks.map((notebook, index ) => (
          <Grid key={notebook.id} item xs={12} sm={6} md={3}>
            <NotebookCard notebook={notebook} toggleModal={toggleModal} select={select} show={show}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);