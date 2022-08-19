import React, { ReactNode } from 'react';
import { Easing, Img, interpolate, useCurrentFrame } from 'remotion';

interface Props {
  src: string;
  children: ReactNode;
  fadeFromFrame: number;
  fadeToFrame: number;
}

export const PHASE_ASPECT_RATIO = 0.3769;

const Segment = ({ src, children, fadeFromFrame, fadeToFrame }: Props) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [fadeFromFrame, fadeToFrame],
    [0, 1],
    {
      easing: Easing.ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  return (
    <div className='w-full flex border-b-4 border-black' style={{ opacity: opacity }}>
      <Img src={src} className="w-1/2" />
      <div className='w-1/2 flex justify-center items-center text-9xl'>
        {children}
      </div>
    </div>
  );
};

export default Segment;