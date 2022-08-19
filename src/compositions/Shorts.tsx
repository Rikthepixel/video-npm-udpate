import React, { useMemo } from 'react';
import { AbsoluteFill, Audio, Img, Sequence, staticFile, useVideoConfig } from 'remotion';
import Segment, { PHASE_ASPECT_RATIO } from '../components/Segment';
import Phases from '../visuals/Phases';

const audio = staticFile("/audio.mp3");

const Shorts = () => {
  const { width } = useVideoConfig();


  return (
    <>
      <Sequence from={0}>
        <AbsoluteFill className='bg-white'>
          <AbsoluteFill style={{ transform: `translate(0, calc(-50% + ${(PHASE_ASPECT_RATIO * width) * 0.5}px)` }}>
            <Phases />
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      <Audio src={audio} />
    </>
  );
};

export default Shorts;