import React from 'react';

interface AnimalSoundProps {
  imageSrc: string;
  audioSrc: string;
  isPinned: boolean;
  onPinToggle: () => void;
}

const AnimalSound: React.FC<AnimalSoundProps> = ({ imageSrc, audioSrc, isPinned, onPinToggle }) => {
  const playSound = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center m-4">
      <img src={imageSrc} alt="Animal" className="w-32 h-32 cursor-pointer" onClick={playSound} />
      <button
        className={`mt-2 px-4 py-2 rounded ${isPinned ? 'bg-green-500' : 'bg-gray-500'}`}
        onClick={onPinToggle}
      >
        {isPinned ? 'Pinned' : 'Pin'}
      </button>
    </div>
  );
};

export default AnimalSound;
