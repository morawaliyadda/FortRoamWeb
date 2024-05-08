import { Parallax } from 'react-parallax';
import BackgroundVideo from '../../assets/video.mp4';
import './slider.css';


const VideoOne = () => (
    <Parallax className='parallax'  bgImage={BackgroundVideo}  strength={800}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);

export default VideoOne;