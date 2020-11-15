/* const domain = 'meet.jit.si';
const options = {
    roomName: 'JitsiMeetAPIExample',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);
*/
import Layout from './Layout';
import VideConference from './VideoConference';

function Classroom () {
  return (
    <Layout>
      <h1>Classroom Up!</h1>
      <VideConference/>
    </Layout>
  );
}

export default Classroom;