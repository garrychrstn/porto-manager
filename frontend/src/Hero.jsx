const Hero = () => {
    let posts = ['developer', 'network engineer consultant', 'ui / ux', 'cybersecs consultant']
    // const [handle, setHandle] = useState('developer')

    // function wait(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    // let x = 0;
    // async function waitOneSecond() {
    //     await wait(1000);  // Waits for 1 second
    // }
    // if (x <= 3) {
    //     setHandle(position[x])
    //     waitOneSecond()
    //     x += 1
    // } else {
    //     x = 0;
    // }
    let x = Math.floor(Math.random() * posts.length)
    let post = posts[x]
    return ( 
        <>
            <div className="hero">
                <h1>Isca's Software House</h1>
                <p>ask me about : <span className="underline">{ post }</span></p>

            </div>
        </>
     );
}
 
export default Hero;