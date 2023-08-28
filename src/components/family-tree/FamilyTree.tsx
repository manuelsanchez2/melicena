import { Tree, TreeNode } from 'react-organizational-chart';
import data from './family.json';
import { StyledNode } from '@/components/family-tree/StyledNode';
import { useState } from 'react';

const findRelationship = (data: any, person1: any, person2: any) => {
  // Logic to find the relationship between two people.
  // For now, just a placeholder.
  return 'cousin';
};

const FamilyTree = () => {
  const [selectedPeople, setSelectedPeople] = useState([]);

  const handleClick = (person: any) => {
    // Limiting to only 2 people being selected at a time
    if (selectedPeople.length < 2) {
      setSelectedPeople([...selectedPeople, person]);
    }

    if (selectedPeople.length === 1) {
      const relationship = findRelationship(data, selectedPeople[0], person);
      alert(
        `The relationship between ${selectedPeople[0].name} and ${person.name} is ${relationship}`,
      );
      setSelectedPeople([]); // Clear the selected people
    }
  };

  const isSelected = (person: any) => {
    return selectedPeople.some(
      (selectedPerson) => selectedPerson.name === person.name,
    );
  };

  const genderTree = (node: any) => {
    return node?.map((person: any, i: number) => (
      <TreeNode
        key={person.id}
        label={
          <StyledNode
            selected={isSelected(person)}
            onClick={() => handleClick(person)}
          >
            <div>{person?.name}</div>
            {person?.partner && <div>♥ {person?.partner}</div>}
          </StyledNode>
        }
      >
        {genderTree(person?.children)}
      </TreeNode>
    ));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // Set this according to your needs
        overflow: 'auto', // Scrollbars will appear when content overflows
      }}
    >
      <Tree
        lineWidth={'2px'}
        lineColor={'green'}
        lineBorderRadius={'10px'}
        label={
          <StyledNode onClick={() => console.log('Yehja')}>
            La familia López
          </StyledNode>
        }
      >
        {genderTree(data)}
      </Tree>
    </div>
  );
};

export default FamilyTree;
