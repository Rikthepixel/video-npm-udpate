import React, { useMemo } from 'react';
import { AbsoluteFill, Audio, Img, Sequence, staticFile } from 'remotion';
import Segment from '../components/Segment';
import Phases from '../visuals/Phases';

const audio = staticFile("/audio.mp3");

const Normal = () => {

  return (
    <>
      <Sequence from={0}>
        <AbsoluteFill className='bg-white'>
          <Phases />
        </AbsoluteFill>
      </Sequence>

      <Audio src={audio} />
    </>
  );
};

export default Normal;