const About = ({profile}) => {
    let struct = ['name', 'dob', 'address', 'job_status', 'marr_status', 'hobbies', 'desc']
    console.log('here is the data', profile)

    if(!profile) {
        return <div>Loading...</div>
    }

    if (Array.isArray(profile) && profile.length > 0) {
        profile = profile[0];  // Take the first item if it's an array
    }

    // if (typeof profile !== 'object' || Object.keys(profile).length === 0) {
    //     return <div>No profile data available</div>;
    // }
    
    return ( 
        <>
            { struct.map((e) => (
                <h1 className="dis" key={ e }>{ profile[e] }</h1>
            ))}
        </>
     );
}
 
export default About;