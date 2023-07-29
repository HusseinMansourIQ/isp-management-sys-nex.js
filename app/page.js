import Image from 'next/image'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
export default async function Home() {
  //server
const users = await prisma.Costumers.findMany()
  return (
    <main className=" space-y-4 flex-col items-center justify-between p-24">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    user name
                </th>
                <th scope="col" class="px-6 py-3">
                    display name 
                </th>
                <th scope="col" class="px-6 py-3">
                    debt
                </th>
                
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
          {users.map((user)=>{ return(
          
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <a href={`/${user.id}`}>{user.user_name}"</a>
          </th>
          <td class="px-6 py-4">
              {user.display_name}
          </td>
          <td class="px-6 py-4">
              {user.debt}
          </td>
         
          <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
      </tr>

          )})}
           
            
        </tbody>
    </table>
</div>

</main>
  )
}
