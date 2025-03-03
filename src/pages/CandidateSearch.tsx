import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type {Candidate} from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
const [results, setResults] = useState<Candidate[]>([]);
const [currentUser, setCurrentUser] = useState<Candidate>({
  id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
});
const [currentIndex, setCurrentIndex] = useState<number>(0);

const searchForSpecUser = async (user: string) => {
  const data: Candidate = await searchGithubUser(user);
  setCurrentUser(data);
}

const searchForUsers = async () => {
  const data: Candidate[] = await searchGithub();
  setResults(data);

  await searchForSpecUser(data[currentIndex].login || '');
}

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
