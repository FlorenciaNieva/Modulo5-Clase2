import Netflix from '/public/images/netflix.jpg'

function Home() {
    return (
        <div>
            <img src={Netflix} alt="not found" style={{ width: '100%' }}/>
        </div>
    )
}

export default Home;