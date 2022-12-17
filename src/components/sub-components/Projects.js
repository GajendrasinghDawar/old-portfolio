import "../css/Projects.css"
import About from "./About"

export default function Projects() {
    return (
        <section className="project-section">
            <About />
            <header>
                <h1> Here are some projects I've built: </h1>
            </header>
            <article className="article-flex-container">

                <div className="project-divs give-me-width">
                    <h3>E-learning Website</h3>
                    <p>This simple E-learning Django website has a content management system (CMS). Where students can enroll, and Teachers can serve content through the website . Students can also chat in enrolled course rooms. This website is running on Amazon Elastic Compute Cloud (Amazon EC2). <a className="make-a" href="https://github.com/GajendrasinghDawar/e-learning_website" target={'_blank'} rel="noopener noreferrer">look into the source code</a>.</p>
                    <h4>Tools (technologies) I have used in this project: </h4>

                    <dl>
                        <dt>
                            <span className="highlight-me">Bulma CSS framework</span>
                        </dt>
                        <dd className="left-dd">I used the Bulma CSS framework to beautify the frontend. Although, my website does not look so appealing.</dd>
                    </dl>
                    <dl>
                        <dt><span className="highlight-me">Memcached Server</span></dt>
                        <dd className="left-dd">I used the Memcached backend for caching course content.</dd>
                    </dl>
                    <dl>
                        <dt>
                            <span className="highlight-me">Django Channels and Redis Server </span>
                        </dt>
                        <dd className="left-dd">I used Channels for real-time communication between the Client and the Server. For Django Channels' storage layer, I used Redis.</dd>
                    </dl>
                    <dl>
                        <dt><span className="highlight-me">AWS EC2 Instance</span></dt>
                        <dd className="left-dd">
                            I used Amazon EC2 Instance for deploying the e-learning website, Redis, and Memcached server on the same instance.
                        </dd>
                    </dl>
                    <dl >
                        <dt><span className="highlight-me">AWS S3 Bucket</span></dt>
                        <dd className="left-dd">
                            I used S3 Sucket for user uploading files and also for serving static files.
                        </dd>
                    </dl>
                </div>
                <div className="project-divs">
                    <h3>This Portfolio Website</h3>
                    <p>It's my reactJs Website, Where I'll write notes for my future self. To build this website, I took a theme reference from Djangoproject.com.</p>
                    <h4>Tools (technologies) I have used in this project: </h4>
                    <dl>
                        <dt><span className="highlight-me">Django</span></dt>
                        <dd className="left-dd">
                            I used Django in this project for serving blogs (notes to self) from the backend. However, it still needs some polish. Django is running on <a className="make-a" href="http://gajendrasinghdawar.pythonanywhere.com/myportfolio_api/" target={'_blank'} rel="noopener noreferrer">PythonAnywhere.com</a>.
                        </dd>
                    </dl>
                    <dl>
                        <dt><span className="highlight-me ">aws amplify</span></dt>
                        <dd className="left-dd"> <>I used AWS Amplify for deploying this Portfolio's frontend.</></dd>
                    </dl>
                </div>
            </article>
        </section>
    )
}