import type { Candidate } from '../interfaces/Candidate.interface';
import { IoRemoveCircle } from 'react-icons/io5';

type SavedCandidatesProps = {
  candidate: Candidate;
  rejectedCandidate: (id: number) => void;
};

const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
    </>
  );
};

export default SavedCandidates;
