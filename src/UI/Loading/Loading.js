import loadVid from "./load.mp4";
import style from "./Loading.module.css";

export default function Loading(props) {

    return(

    <div className={style.loadingWrapper}>
        <video className={style.loadingVideo} autoplay="autoplay"  loop="loop" playsinline="playsinline"  muted="muted" disablePictureInPicture controlsList="nodownload">
            <source src={loadVid} type="video/mp4"/>
            Loading...
        </video>   
    </div>   

    )

};

//   preload="auto" controls="false"