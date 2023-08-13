import Image from 'next/image'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import Search from '@/components/search'
import Trigger from './trigger';
export default async function Home({searchParams}) {
    const page =  typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
    const limit =typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 5
    const search = searchParams.search ? searchParams.search : ""
  //server

const users = await prisma.Costumers.findMany({
    take: limit,
  skip: (page-1)*limit ,
  where: {
    user_name:{
        contains : search
    }
  },
})
  return (
    <main className=" space-y-4 flex-col items-center justify-between p-24">
<Search search={search} />  

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th  scope="col" class="px-6 py-3">
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
          
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <a href={`/createInvoice/${user.id}`}>{user.user_name}</a>
          </th>
          <td class="px-6 py-4">
              {user.display_name}
          </td>
          <td class="px-6 py-4">
              {user.debt}
          </td>
         
          <td class="px-6 py-4 text-right">
              <a href={`/${user.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
      </tr>

          )})}
           
            
        </tbody>
    </table>
</div>

</main>
  )
}
