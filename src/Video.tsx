import { Composition } from 'remotion';
import Normal from './compositions/Normal';
import Shorts from './compositions/Shorts';
import './styles/style.css';

export const RemotionVideo: React.FC = () => {
	const fps = 60;
	const duration = fps * 8;

	return (
		<>
			<Composition
				id="Normal"
				component={Normal}
				durationInFrames={duration}
				fps={fps}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Shorts"
				component={Shorts}
				durationInFrames={duration}
				fps={fps}
				width={1080}
				height={1920}
			/>
		</>
	);
};
