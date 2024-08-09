import Link from 'next/link';
import classes from './User.module.css';
import { IUser } from '@/app/fetch-user/page';



const User = ({
  login,
  avatar_url,
  html_url,
}: IUser) => {
  return <div className="flex items-center mt-5 p-2 border bg-white border-blue-500 rounded-3xl">
    <div className={classes.user_image_wrapper}>
      <img src={avatar_url} alt={login} />
    </div>
    <div className='ml-5'>
      <Link
        href={html_url}
        target="_blank"
        className=" text-2xl text-blue-500 px-4 py-1 hover:underline"
      >
        {login}
      </Link>
    </div>
  </div>

}

export default User