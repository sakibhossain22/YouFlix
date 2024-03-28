import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Download from "./Download/Download";
import AllVideos from "./UserType/AllVideos";
import Plan from "./RegisterNow/RegisterNow";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>YouFlix || Home</title>
            </Helmet>
            <Banner></Banner>
            <AllVideos></AllVideos>
            <Plan></Plan>
            <Download></Download>
        </div>
    );
};

export default Home;