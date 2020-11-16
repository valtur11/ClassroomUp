import Layout from './Layout';
import VideConference from './VideoConference';
import MicRecorder from 'mic-recorder-to-mp3';
import React, { useState, useEffect } from 'react';
// New instance
const recorder = new MicRecorder({
  bitRate: 128
});

function Classroom () {
  function startRecording () {
    // Start recording. Browser will request permission to use your microphone.
    recorder.start().then(() => {
      setRecordingState(true);
    // something else
    }).catch((e) => {
      console.error(e);
    });
  }
  function stopRecording () {
    // Once you are done singing your best song, stop and get the mp3.
    setRecordingState(false);
    recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, 'me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });

        const player = new Audio(URL.createObjectURL(file));
        player.play();

      }).catch((e) => {
        alert('We could not retrieve your message');
        console.log(e);
      });
  }

  const [isRecording, setRecordingState] = useState(false);
  useEffect(() => {
    startRecording();
    setTimeout(stopRecording, 6000); //lets 60 secs
  }, []);

  return (
    <Layout>
      <ul className="nav">
        <li className="nav-item">
          <h1>Classroom Up!</h1>
        </li>
        <li className='nav-item'>
          { isRecording && <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Recording...</span>
          </div> }
        </li>
        <li className ='nav-item'>
          <button className = 'btn btn-primary' onClick={startRecording}>Start recording</button>
        </li>
        <li className ='nav-item'>
          <button className = 'btn btn-primary' onClick={stopRecording}>Stop recording</button>
        </li>
      </ul>
      <VideConference/>
    </Layout>
  );
}

export default Classroom;