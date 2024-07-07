import React, { useState } from 'react';

const CounterItem = ({ counter, onUpdate, index }) => {
  const [name, setName] = useState(counter.name);
  const [count, setCount] = useState(counter.count);
  const [color, setColor] = useState(counter.color);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onUpdate({ ...counter, name: newName });
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdate({ ...counter, count: newCount });
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onUpdate({ ...counter, count: newCount });
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onUpdate({ ...counter, color: newColor });
  };

  return (
    <div className="p-4 mb-2 rounded" style={{ backgroundColor: color }}>
      <h3 className="text-lg mb-2"> {index + 1}</h3>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="p-1 mb-2 border rounded w-full"
      />
      <div className="flex items-center justify-between">
        <button onClick={handleDecrement} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
        <span className="text-xl">{count}</span>
        <button onClick={handleIncrement} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
      </div>
      <div className="mt-2 flex justify-between">
        <button onClick={() => handleColorChange('#3A3A3A')} className="w-6 h-6 rounded-full bg-white border"></button>
        <button onClick={() => handleColorChange('#A71F1F')} className="w-6 h-6 rounded-full bg-red-900 border"></button>
        <button onClick={() => handleColorChange('#58769C')} className="w-6 h-6 rounded-full bg-blue-900 border"></button>
        <button onClick={() => handleColorChange('#3B7E65')} className="w-6 h-6 rounded-full bg-green-900 border"></button>
        <button onClick={() => handleColorChange('#B49130')} className="w-6 h-6 rounded-full bg-yellow-900 border"></button>
      </div>
    </div>
  );
};

export default CounterItem;
