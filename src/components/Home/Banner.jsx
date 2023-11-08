

const Banner = () => {
    return (
        <div className="mt-16 mb-16">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Hzb9pvh/dinner-together.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-10 text-5xl font-bold text-sky-400">Share your Food for the <span className="text-purple-400 font-extrabold text-6xl">Betterment of the world</span></h1>
                        <p className="mb-16 text-blue-300 font-bold text-lg max-w-3xl">Community food sharing is a beautiful act of compassion and solidarity that nourishes not only our bodies but also our spirits. It fosters a sense of belonging, trust, and support among individuals, fostering a stronger, more tightly knit community. By sharing food, we not only reduce waste and contribute to sustainable living but also exemplify the values of kindness and togetherness, ensuring that no one goes hungry and everyone can enjoy the warmth and sustenance of a shared meal. It is a reminder that our communities are stronger when we come together to support one another, especially during times of need.</p>
                        <button className="btn btn-primary bg-sky-500 text-white border-0">Start Exploring</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;