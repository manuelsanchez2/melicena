import { Node } from '@/components/family-tree/types';

export const findPaths = (
  node: Node,
  id: number,
  path: Node[] = [],
): Node[] | null => {
  if (node.id === id) return [...path, node];

  for (const child of node.children || []) {
    const found = findPaths(child, id, [...path, node]);
    if (found) return found;
  }

  return null;
};

export const findRelationship = (data: Node[], id1: number, id2: number) => {
  const path1 = findPaths(data[0], id1);
  const path2 = findPaths(data[0], id2);

  if (!path1 || !path2) return 'Not related';

  let i = 0;
  while (path1[i] && path2[i] && path1[i].id === path2[i].id) {
    i++;
  }

  const divergingPoint = i;
  const remainingPath1 = path1.slice(divergingPoint);
  const remainingPath2 = path2.slice(divergingPoint);

  const len1 = remainingPath1.length + 1;
  const len2 = remainingPath2.length + 1;

  console.log(len1, len2);

  if (len1 === 1 && len2 === 1) return 'Es la misma persona';

  if (len1 === 2 && len2 === 2) return 'Herman@s';

  if (len1 === 1 && len2 === 2) return 'Padre/Madre - Hij@';
  if (len2 === 1 && len1 === 2) return 'Padre/Madre - Hij@';

  if (len1 === 1 && len2 === 3) return 'Abuel@-Niet@';
  if (len2 === 1 && len1 === 3) return 'Abuel@-Niet@';

  if (len1 === 2 && len2 === 4) return 'Tí@ abuel@-Sobrin@ niet@';
  if (len2 === 2 && len1 === 4) return 'Tí@ abuel@-Sobrin@ niet@';

  if (len1 === 3 && len2 === 4) return 'Prim@s segundos';
  if (len2 === 3 && len1 === 4) return 'Prim@s segundos';

  if (len1 === 1 && len2 === 4) return 'Bisabuel@-Bisniet@';
  if (len2 === 1 && len1 === 4) return 'Bisabuel@-Bisniet@';

  if (len1 === 1 && len2 === 5) return 'Tatarabuel@-Tataraniet@';
  if (len2 === 1 && len1 === 5) return 'Tatarabuel@-Tataraniet@';

  if (len1 === 1 && len2 === 6) return 'Tataratatarabuel@-Tataratataraniet@';
  if (len2 === 1 && len1 === 6) return 'Tataratatarabuel@-Tataratataraniet@';

  if (len1 === 3 && len2 === 3) return 'Prim@s hermanos';

  if ((len1 === 2 && len2 === 3) || (len1 === 3 && len2 === 2))
    return 'Tí@-Sobrin@';

  return 'Relación todavía por definir.';
};
