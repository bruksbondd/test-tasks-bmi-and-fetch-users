
"use client"
import { useState } from 'react';

import User from '../ui/user/User';
import Search from '../ui/search/Search';

export interface IError {
  response: {
    status: number;
  };
}

export interface IUser {
  login: string
  avatar_url: string
  html_url: string
}

export default function FetchUsers() {
  const [userLogin, setUserLogin] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${userLogin}`);
      const json = await response.json();
      setResults(json.items);
      if (response.status === 200) {
        setError("");
        if(json.items.length === 0) {
          setError(`User ${userLogin} not found!`);
        }
      } else {
        console.error("Failed to retrieve login.");
        setError("An error occurred");
      }
    }
    catch (err: unknown) {
      const error = err as IError;
      if (error.response && error.response.status === 404) {
        setError(`User ${userLogin} not found`);
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <main className="min-h-screen p-5 pt-1 mt-[80px] container mx-auto pb-6 w-[478px] max-w-full  text-slate-800">
      <h2 className="text-4xl font-bold text-blue-500 text-center mt-6 mb-6">USER SEARCH</h2>
      <Search handleSearch={handleSearch} setUserLogin={setUserLogin} userLogin={userLogin} />
      <div className='h-[1px] bg-blue-500 mt-[23px]' ></div>
      {error && <div className="mt-4 font-semibold text-xl text-slate-800 text-center ">{error}</div>}
      {results?.length > 0 && <>
        <div className='text-[#929FAF] font-semibold text-xl relative text-center mt-[20px]'>Results</div>
        {results.map((user: IUser) => (
          <User
            key={user.login}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
            login={user.login}
          />
        ))}
      </>
      }
    </main>
  );
}

