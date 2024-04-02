import React, { useState } from 'react';
import Box from './Box'; // Make sure this path matches where your Box component is located
import NewBoxForm from './NewBoxForm'; // Make sure this path matches where your NewBoxForm component is located

function BoxList() {
  const [boxes, setBoxes] = useState([]); // State to keep track of all boxes

  // Function to add a new box
  const addBox = newBox => {
    setBoxes(oldBoxes => [...oldBoxes, { ...newBox, id: Math.random() }]);
  };

  // Function to remove a box by id
  const removeBox = id => {
    setBoxes(oldBoxes => oldBoxes.filter(box => box.id !== id));
  };

  return (
    <div>
      {/* Render each box */}
      {boxes.map(box => (
        <Box 
          key={box.id} 
          id={box.id}
          width={box.width} 
          height={box.height} 
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(box.id)} 
        />
      ))}
      {/* NewBoxForm component to add a new box */}
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;
