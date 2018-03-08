import React from 'react';
import ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';


const styles = theme => ({

  audioContainer: {
    height: '75px',
    display: 'block',
    maxHeight: '75px',
  },
  audioRow: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
//padding-top: 20px,
    color: '#555',
  },
  playerContainer: {
    width: '435px',
    margin: '0 auto',
    overflow: 'hidden',
    backgroundColor: '#EAEDEF',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
  },
  playerProgressContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#d8d8d8',
    backgroundRepeat: 'repeat-x',
    cursor: 'pointer',
    display: 'inline-block',


    // position: 'relative',
    // width: '365px',
    // height: '9px',
    // margin: '0 auto',
    // backgroundColor: '#414141',
    // bordeRadius: '40px',
  },
  playerProgressValue: {

    float: 'left',
    width: 0,
    height: '100%',
    fontSize: '12px',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#c1c1c1',
    boxSizing: 'border-box',
    transition: 'width 0.3s ease',
    display: 'inline-block',


    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // backgroundColor: '#CDD2D8',
    // borderRadius: '40px',


    // '&after': {
    //   position: 'absolute',
    //   top: '-3px',
    //   right: '-6px',
    //   content: '',
    //   width: '15px',
    //   height: '15px',
    //   borderRadius: '50%',
    //   backgroundColor: '#7748B5',
    //   boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 5px 2px;'
    // }
  },
});

class AudioPreview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isPlaying: false,
    }

    // this.updateIsPlaying = this.updateIsPlaying.bind(this);
    // this.updateSource = this.updateSource.bind(this);
    // this.onPro= this.updateIsPlaying.bind(this);
    // this.onTimeUpdate = this.handleProgress.bind(this);


  }

  componentDidMount() {
    console.log('componentDidMount');

    this.setState({
      progress: 0,
      isPlaying: false,
      isLoaded: false
    });

    this.audio = new Audio();
    this.audio.type = "audio/mpeg";
    this.audio.src = this.props.audioSrc;
    this.audio.autoPlay = false;

    this.audio.addEventListener('loadstart', this.handleLoadStart);
    this.audio.addEventListener('canplay', this.handleCanPlay);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.addEventListener('progress', this.handleProgress);
    this.audio.addEventListener('ended', this.handleMediaEnd);
    this.audio.addEventListener('error', this.handleError);

    console.log('listeners completed');

    this.updateIsPlaying();
  }

  componentWillUnmount() {
    this.audio.src = null;
    this.audio.addEventListener('loadstart', this.handleLoadStart);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.removeEventListener('canplay', this.handleCanPlay);
    this.audio.removeEventListener('progress', this.handleProgress);
    this.audio.removeEventListener('ended', this.handleMediaEnd);
    this.audio.removeEventListener('error', this.handleError);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.audioSrc !== this.props.audioSrc) {
      this.updateSource();
    }

    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.updateIsPlaying();
    }

    if (prevProps.defaultTime !== this.props.defaultTime) {
      this.updateCurrentTime();
    }
  }

  handleTimeUpdate = () => {
    console.log('timeupdate');

    const currentTime = this.audio.currentTime,
      trackDuration = this.audio.duration;

    let progress = (currentTime * 100) / trackDuration;

    this.setState({
      progress: progress,
      currentTime: currentTime,
    });

  };

  handleProgress = () => {
    console.log('handleProgress');
    const {duration, buffered} = this.audio;

    // this.setState({
    //   progress: progress,
    //   currentTime: currentTime,
    //   buffered: buffered,
    // });
  };

  handleMediaEnd = () => {
    this.audio.currentTime = 0;
    // this.props.onEnd();
  };

  handleError = (e) => {
    console.log('handleError', e);
  };

  handleCanPlay = (e) => {
    this.setState({isLoaded: true});
    console.log('audio can play... ');
  };

  handleLoadStart = (e) => {
    console.log('handleLoadStart')
  };


  setTime = (e) => {
    this.audio.currentTime = this.audio.duration * this.clickPercent(e);
  };

  // moveplayhead = (event) => {
  //   let newMargLeft = event.clientX - event.target.getBoundingClientRect().left;
  //
  //   if (newMargLeft === 0 && newMargLeft === ReactDOM.findDOMNode(this).offsetWidth) {
  //     this.barstyle.marginLeft = newMargLeft + "px";
  //   }
  //   if (newMargLeft ===  0) {
  //     this.barstyle.marginLeft = "0px";
  //   }
  //   if (newMargLeft === this.timelineWidth) {
  //     this.barstyle.marginLeft = this.timelineWidth + "px";
  //   }
  // }


  clickPercent(event) {
    return (event.clientX - this.getPosition(event.target)) / ReactDOM.findDOMNode(this).offsetWidth;
  }

  getPosition(el) {
    return el.getBoundingClientRect().left;
  }
  // getPosition = (el) => el.getBoundingClientRect().left;

  updateCurrentTime() {
    if (this.audio.readyState) {
      this.audio.currentTime = this.props.defaultTime;
    }
  }

  updateIsPlaying() {
    const isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  updateSource() {
    const isPlaying = this.props.isPlaying;

    this.audio.pause();
    this.props.onTimeUpdate({
      currentTime: 0,
      trackDuration: this.audio.duration
    });

    this.audio.load();
    if (isPlaying) {
      this.audio.play();
    }
  }

  render() {

    console.log('render');

    const {
      progress,
      isLoaded
    } = this.state;
    const {
      classes
    } = this.props;

    return (
      <div className={classes.audioContainer}>
        {!isLoaded &&  <LinearProgress color="primary" />}

        {/*<div className={classes.audioRow}>*/}
          {/*<div className={classes.playerProgressContainer} onClick={this.setTime}>*/}
            {/*<span className={classes.playerProgressValue}*/}
                  {/*style={{width: progress + '%'}}></span>*/}
          {/*</div>*/}
         {/*</div>*/}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>Audio Preview</h1>
  //     </div>
  //   )
  // }
}

export default withStyles(styles)(AudioPreview);