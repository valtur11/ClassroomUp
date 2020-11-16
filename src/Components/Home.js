import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12" style={{backgroundColor: '#FFFFFF'}}>
            <h2>Our Project</h2>
            <p>Classroom UP was built to resolve some major issues in remote learning, especially the Video call. Our App is made to handle 3 major problems with Video call apps, Inconvenince when taking attendence for teachers, Students forgetting to attend the meeting, and the distractions caused by unmuting microphones to ask questions during a test.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{backgroundColor: '#FFFFFF'}}>
            <h2>Our Story</h2>
            <p>After meeting at an Online Hackathon, We all agreed that remote learning is difficult, and this app exemplifies the ideas that we came up with to make it better.</p>
            <h3>Here is our team:</h3>
            <img src='./Team.PNG' width= '400px' height='200px' className="Logo" alt="logo" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;