// Componet's Name is not mattered because default export should be assigend

import Seo from '../components/Seo';

// Even this file creates as .js then, it will work very well.
export const About = (): React.ReactElement => {
  return (
    <div>
      <Seo title="About" />
      <h1 className="active">About</h1>
    </div>
  );
};

export default About;
