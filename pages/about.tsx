// Componet's Name is not mattered because default export should be assigend

import NavBar from "../components/NavBar";

// Even this file creates as .js then, it will work very well.
export default function About():React.ReactElement{ 
    return <div>
        <NavBar></NavBar>
    </div>
}