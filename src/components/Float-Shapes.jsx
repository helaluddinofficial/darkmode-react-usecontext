'use client';

import {useParalox} from "../hooks/useParalox"

const FloatShapes = () => {
  const scrollY = useParalox()
  const shapes = [
    {
      id: 1,
      size: 'w-72 h-72', // Fixed space
      position: 'top-20 left-10',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      size: 'w-96 h-96', // Fixed space
      position: 'top-1/3 right-10',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      id: 3,
      size: 'w-64 h-64', // Fixed space
      position: 'bottom-20 left-1/4',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      size: 'w-80 h-80', // Fixed space
      position: 'bottom-1/3 right-1/4',
      gradient: 'from-green-500 to-cyan-600',
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => {
        return (
          <div
            key={shape.id}
            className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotate(${
                scrollY * 0.1
              }deg)`, // Fixed transform
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatShapes;
