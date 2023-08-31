import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation';
export function PostForm(){
    
  async function addUser(formData){
    'use server';
    const data = {
      user_name : formData.get('user_name'),
      password : formData.get('password'),
      display_name : formData.get('display_name'),
      debt : Number(formData.get('debt')) ,
      
        }

        await prisma.Costumers.create({
          data
        })
        redirect('/')
  }
       

    return(
        <div>
          <form action={addUser}>
              <main className=" space-y-4  items-center justify-between p-24">

        <input type="text" name="user_name" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="اسم المستخدم" required></input>
      <input type="text" name="password" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="الرمز السري" required></input>
      <input type="text" name="display_name" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="الاسم الضاهر" required></input>
      <input type="text" name="debt" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="الديون" required></input>

     <button type="submit" class="text-right max-w-md p-2.5  text-sm text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> اضافة المستخدم</button>

    </main>
    </form>
      </div>
    )

}