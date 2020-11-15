import React, { useState } from 'react';

const VideoConference = () => {
  const jitsiContainerId = 'jitsi-container-id';
  const [jitsi, setJitsi] = useState({});

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise(resolve => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => resolveLoadJitsiScriptPromise(true);
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  const initialiseJitsi = async () => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new window.JitsiMeetExternalAPI('meet.jit.si', {
      parentNode: document.getElementById(jitsiContainerId)
    });
    //Interact with WebFrame API:

    setJitsi(_jitsi);
  };

  React.useEffect(() => {
    initialiseJitsi();
    // eslint-disable-next-line
    return () => jitsi?.dispose?.();
  }, []);

  const height = 620; //originally 720
  return <div id={jitsiContainerId} style={{ height, width: '100%' }} />;
};

export default VideoConference;