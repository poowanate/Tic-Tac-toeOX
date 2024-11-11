'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <div className='flex-col'>
        <p className="txt-head txt-red">ข้อมูลส่วนตัว</p>
        <div className="box-card"></div>
        <div className="mt-5 ">
                                   
                                    <div className=" justify-items-center">
                                    <img src={user.picture} alt={user.name} />
                                    </div>
                                </div>
   
        <div className="mt-5 ">
                                    <label className="" >ชื่อ</label>
                                    <div className=" bg-gray-200">
                                    {user.name}
                                    
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <label className="" >อีเมล</label>
                                    <div className=" bg-gray-200">
                                    {user.email}
                                    </div>
                                </div>
        </div>
    
        
        
       
      </div>
    )
  );
}