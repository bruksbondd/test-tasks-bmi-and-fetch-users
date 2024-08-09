

import { IoMdSend } from 'react-icons/io'

type SearchProps = {
    handleSearch: React.FormEventHandler<HTMLFormElement>;
    userLogin: string;
    setUserLogin: Function;
};

export const Search = ({handleSearch, userLogin, setUserLogin}: SearchProps) => {
  return (
    <form onSubmit={handleSearch} className="mt-4 flex flex-col items-start">
        <label htmlFor="github_username" className="mb-1 text-base text-[#929FAF]">
          Search by username or email
        </label>

        <div className="flex items-center gap-2 min-w-full relative">
          <input
            id="github_username"
            name="github_username"
            type="text"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            placeholder="Ex: strapi"
            className="h-[57px] w-80 min-w-full rounded-[12px] border bg-white border-slate-50 bg-transparent px-2 outline-blue-500"
          />
          <button className="absolute right-2 rounded-full p-2 transition-colors bg-blue-500 hover:text-sky-500" type="submit">
            <IoMdSend size={24} color='white' className="pl-[4px]" />
          </button>
        </div>
      </form>
  )
}
 
export default Search;