import React, { useMemo } from 'react';
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import Segment, { PHASE_ASPECT_RATIO } from '../components/Segment';
import phases from '../constants/phases';

interface ScrollData {
  frames: number[];
  positions: number[];
}

const Phases = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  const timePerPhase = durationInFrames / 3;
  const phaseHeight = width * PHASE_ASPECT_RATIO;
  const paddingTop = height - phaseHeight;

  const fadeData = useMemo(() => {
    let currFrame = 0;
    let currPosition = 0;

    return phases.map((_, i) => {
      const point = {
        frames: [currFrame + 0.0001, currFrame + timePerPhase * 0.9, currFrame + timePerPhase],
        positions: [currPosition, currPosition, currPosition + phaseHeight]
      };

      currPosition += phaseHeight;
      currFrame += timePerPhase;

      return point;
    });
  }, []);

  const scrollData = useMemo(() => {
    const data = fadeData.reduce<ScrollData>((prev, curr) => ({
      frames: prev.frames.concat(curr.frames),
      positions: prev.positions.concat(curr.positions)
    }), { frames: [], positions: [] });

    data.frames.pop();
    data.positions.pop();

    return data;
  }, [fadeData]);

  const scroll = interpolate(
    frame,
    scrollData.frames,
    scrollData.positions,
    {
      easing: Easing.ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  const renderedPhases = useMemo(() => {
    return phases.map((phase, i) => {

      const fadeFrames = fadeData[i - 1]?.frames ?? [0, -0.0001, 0];

      const from = fadeFrames.at(1)!;
      const to = fadeFrames.at(2)!;

      return <Segment
        key={i}
        src={phase.src}
        fadeFromFrame={from}
        fadeToFrame={to}
      >
        {phase.text}
      </Segment>;
    });
  }, []);

  return (
    <AbsoluteFill style={{
      paddingTop: paddingTop,
      top: -scroll
    }}>
      {renderedPhases}
    </AbsoluteFill>
  );
};

export default Phases;