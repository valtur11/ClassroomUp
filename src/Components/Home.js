import Layout from './Layout';

function Home() {
    return (
        <style>
            *{
                box - sizing:border-box;
}

.column{
                float:left;
width:50%;
padding:10px;
}

.row:after{
                content:"";
display:table;
clear:both;
}
        </style>
</head >
        <body>


            <div class="row">
                <div class="column" style="background-color:#FFFFFF;">
                    <h2>Our Project</h2>
            <p>Classroom UP was built to resolve some major issues in remote learning, especially the Video call. Our App is made to handle 3 major problems with Video call apps, Inconvenince when taking attendence for teachers, Students forgetting to attend the meeting, and the distractions caused by unmuting microphones to ask questions during a test.</p>
                </div>
                <div class="column" style="background-color:#FFFFFF;">
                    <h2>Our Story</h2>
            <p>After meeting at an Online Hackathon, We all agreed that remote learning is difficult, and this app exemplifies the ideas that we came up with to make it better.</p>
            <h3>Here is our team:</h3>
            <img src='./Team.PNG' className="Logo" alt="logo" />
                </div>
            </div>
    <Layout></Layout>
  );
}

export default Home;