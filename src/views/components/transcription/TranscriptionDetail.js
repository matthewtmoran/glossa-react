import React from 'react'

class TranscriptionDetail extends React.Component {

  render() {
    const {selectedTranscription} = this.props;

    if (!selectedTranscription) {
      return (<div>Select transcription</div>)
    }

    return (
      <div>
        <p>{selectedTranscription.title}</p>
        <p>{selectedTranscription.desc}</p>
      </div>
    )

  }

}

export default TranscriptionDetail;