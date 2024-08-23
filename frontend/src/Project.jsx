import git from "../axiosGit";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";

const Project = () => {

    const [projects, setProjects] = useState([{id: 0, full_name: 'wait...', description: 'wait..'}])
    useEffect(() => {
        git.get('/repos')
        .then((response) => {
            setProjects(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log('error : ', error)
        })
    }, [])
    return ( 
        <>
            <div className="fullpage">
                <Navbar />
                <Hero />
                <Navigation />
            </div>
            <div className="project">
                { projects.map((project) => (
                    <div className="proj" key={ project.id }>
                        <h2>{ project.full_name }</h2>
                        <p>{ project.description }</p>
                    </div>
                ))}
            </div>
        </>
        
     );
}
 
export default Project;