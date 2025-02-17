import Lottie from "react-lottie";
import * as animationData from "./animations/map.json"

const LottieMap = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={180}
                width={180}
            />
        </div>
    );
}

export default LottieMap