export interface Node {
  id: number;
  name: string;
  partner?: string;
  incomplete?: boolean;
  children?: Node[];
}
