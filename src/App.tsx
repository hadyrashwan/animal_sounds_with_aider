import React, { useState, useEffect } from 'react';
import AnimalSound from './components/AnimalSound';

const App: React.FC = () => {
  const [pinnedAnimals, setPinnedAnimals] = useState<string[]>([]);

  useEffect(() => {
    const savedPinnedAnimals = localStorage.getItem('pinnedAnimals');
    if (savedPinnedAnimals) {
      setPinnedAnimals(JSON.parse(savedPinnedAnimals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pinnedAnimals', JSON.stringify(pinnedAnimals));
  }, [pinnedAnimals]);

  const togglePin = (animal: string) => {
    setPinnedAnimals((prevPinnedAnimals) =>
      prevPinnedAnimals.includes(animal)
        ? prevPinnedAnimals.filter((a) => a !== animal)
        : [...prevPinnedAnimals, animal]
    );
  };

  const animals = [
    { imageSrc: '/animals/dog.webp', audioSrc: '/sounds/dog.mp3', name: 'dog' },
    { imageSrc: '/animals/cat.webp', audioSrc: '/sounds/cat.mp3', name: 'cat' },
    // Add more animals as needed
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      {animals.map((animal) => (
        <AnimalSound
          key={animal.name}
          imageSrc={animal.imageSrc}
          audioSrc={animal.audioSrc}
          isPinned={pinnedAnimals.includes(animal.name)}
          onPinToggle={() => togglePin(animal.name)}
        />
      ))}
    </div>
  );
};

export default App;
