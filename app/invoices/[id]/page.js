//import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route"



async function addinvoice(formData){
  'use server';
  var type 
  var change
  if(Number(formData.get('debt'))>Number(debt) ){
    type = "اضافة"
    change = Number(formData.get('debt')) - Number(debt)
  }else if(Number(formData.get('debt'))<Number(debt)){
    type = "تسديد"
    change = Number(debt) - Number(formData.get('debt')) 
  }else{
    type="لا تغيير"
    change = "0"
  }

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const mng_name = session.user.name;
  const data = {
    manager_name : mng_name,
    user_name : name,
    left_debt : Number(formData.get('left_debt')) ,
    am_change : change,
    type : type,
    note : note
      }

      await prisma.Costumers.invoice({
        data
      })
      redirect('/')
}
export default async function UserProfile({ params }) {
  const user = await prisma.Costumers.findUnique({ where: { id: params.id } });
  const { user_name, display_name, password, debt ,id } = user ?? {};

  return (
    <main className="  h-screen flex items-center justify-center">

    <div class="p-8  left-1 rounded border border-gray-200 w-full max-w-md">
  <h1 class="font-medium text-3xl">{user_name}</h1>
  <h3 class="font-medium text-3xl mt-6">{display_name}</h3>

  <form>
    <div class="mt-8 space-y-6">
      

      <div>
        <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">الحساب</label>
        <input type="text" defaultValue={debt} name="old_debt" id="old_debt" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full max-w-md"  />
      </div>

      <div>
        <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">الملاحضات </label>
        <input type="text" name="left_debt" id="bill" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full max-w-md" />
      </div>
    </div>

    <div class="space-x-4 mt-8">
      <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
     
    </div>
  </form>
</div>
</main>
  );
}