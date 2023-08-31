import Image from 'next/image'
import { prisma } from '@/lib/prisma'
const moment = require('moment');

export default async function Home() {
  //server
const users = await prisma.invoice.findMany()
  return (
    <main className=" space-y-4 flex-col items-center justify-between p-24">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th  scope="col" class="px-6 py-3">
                    user name
                </th>
                <th scope="col" class="px-6 py-3">
                    action by  
                </th>
                <th scope="col" class="px-6 py-3">
                    type
                </th>
                <th scope="col" class="px-6 py-3">
                    amount
                </th>
                <th scope="col" class="px-6 py-3">
                    amount left
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">note</span>
                </th>
            </tr>
        </thead>
        <tbody>
          {users.map((user)=>{ return(
          
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <a href={`/createInvoice/${user.id}`}>{user.user_name}"</a>
          </th>

          <td class="px-6 py-4">
              {user.manager_name}
          </td>

          <td class="px-6 py-4">
              {user.type}
          </td>

          <td class="px-6 py-4">
              {user.am_change}
          </td>

          <td class="px-6 py-4">
              {user.left_debt}
          </td>

          <td class="px-6 py-4">
          {moment(user.date).format('YYYY-MM-DD')}
          </td>

          <td class="px-6 py-4">
              {user.note}
          </td>
         
      </tr>

          )})}
           
            
        </tbody>
    </table>
</div>

</main>
  )
}
