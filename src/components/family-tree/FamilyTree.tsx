import { Tree, TreeNode } from 'react-organizational-chart';
import data from './family.json';
import { StyledNode } from '@/components/family-tree/StyledNode';
import { useState } from 'react';
import { findRelationship } from '@/components/family-tree/functions';

const FamilyTree = () => {
  const [selectedPeople, setSelectedPeople] = useState([]);

  const handleClick = (person: any) => {
    if (selectedPeople.length === 1) {
      const nextSelected = [...selectedPeople, person];
      const relationship = findRelationship(
        data,
        nextSelected[0].id,
        person.id,
      );
      alert(
        `La relación entre ${nextSelected[0].name} y ${person.name} es: ${relationship}`,
      );
      setSelectedPeople([]); // Clear the selected people
    } else {
      setSelectedPeople([...selectedPeople, person]);
    }
  };

  const isSelected = (person: any) => {
    return selectedPeople.some(
      (selectedPerson) => selectedPerson.id === person.id,
    );
  };

  const genderTree = (node: any) => {
    return node?.map((person: any, i: number) => (
      <TreeNode
        key={person.id}
        label={
          <StyledNode
            id={person.id}
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
          <StyledNode id={0} onClick={() => console.log('Yehja')}>
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
