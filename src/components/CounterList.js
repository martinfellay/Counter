import React from 'react';
import CounterItem from './CounterItem';

const CounterList = ({ counters, updateCounter, addCounter }) => {
  return (
    <div className="w-full max-w-3xl">
      {counters.map((counter, index) => (
        <CounterItem
          key={index}
          index={index}
          counter={counter}
          onUpdate={(updatedCounter) => updateCounter(index, updatedCounter)}
        />
      ))}
      <button onClick={addCounter} className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 w-full">
        Añadir Contador
      </button>
    </div>
  );
};

export default CounterList;
