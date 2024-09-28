const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">About Page Example!</h1>
                <p className={"text-lg"}>
                    This is a completely seperate page! We navigate to this page
                    by going to http://localhost:3000/about!
                </p>
                <p className={"text-lg"}>
                    You can also navigate to this page by clicking a button on
                    the main page (more on this later)!
                </p>
            </div>
        </div>
    );
};

export default About;
