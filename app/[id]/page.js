//import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';




export default async function UserProfile({ params }) {
  const user = await prisma.Costumers.findUnique({ where: { id: params.id } });
  const { user_name, display_name, password, debt ,id } = user ?? {};

  async function updateUser(formData){
    'use server';
    const data = {
      user_name : formData.get('user_name'),
      password : formData.get('password'),
      display_name : formData.get('display_name'),
      debt : formData.get('debt'),
      
        }

        await prisma.Costumers.update({
            where :{
                id:id
            },
          data
        })
        redirect('/')
  }
  return (
    <main className=" h-screen flex items-center justify-center ">

    <div class="p-8  left-1 rounded border border-blue-300 w-full max-w-md">
 
    <form action={updateUser}>
            <div class="mt-8 space-y-6">
      <div>
        <label for="user name" class="text-sm text-gray-700 block mb-1 font-medium">user name</label>
        <input type="text"  name='user_name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      <div>
        <label for="password" class="text-sm text-gray-700 block mb-1 font-medium">password</label>
        <input type="text" defaultValue ={password} name='password' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div>
        <label for="display name" class="text-sm text-gray-700 block mb-1 font-medium">display name</label>
        <input type="text" value={display_name} name='display_name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      <div>
        <label for="debt" class="text-sm text-gray-700 block mb-1 font-medium">debt</label>
        <h2 class="font-medium text-3xl">{debt}</h2>
      </div>
    </div>

    <div class="space-x-4 mt-8">
      <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">update</button>

      <a  class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">invoices</a>
    </div>
  </form>
</div>
</main>
  );
}