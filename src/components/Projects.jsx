import './Projects.css';

export default function Projects() {
    return(
        <>
            <div id="projects" className="projects-div">
                <h2>Some Projects In My Bag</h2>
            </div>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="./src/assets/Coursesight Banner.png" alt="Coursesight for Students" />
                    </div>
                    <h3>Coursesight</h3>
                    <p>72 users signed up, 229 courses available, $1,000+ in funding</p>
                    <a href="https://app.course-sight.com/">View Project</a>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="./src/assets/AIFlash-Banner.png" alt="TJ-Projects3 AI Flashcards Project" />
                    </div>
                    <h3>AI Flashcards</h3>
                    <p>Generate personalized AI-powered flashcards for any topic!</p>
                    <a href="https://github.com/TJ-Projects3/AI-Flashcards-Stripe">View Project</a>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="./src/assets/MERN-Banner.png" alt="TJ-Projects3 Cozy Corners Project" />
                    </div>
                    <h3>Cozy Corners</h3>
                    <p>A website to post and find the perfect furniture inspo!</p>
                    <a href="https://github.com/TJ-Projects3/MERN-Product-App">View Project</a>
                </div>
            </div>
        </>
    )
}