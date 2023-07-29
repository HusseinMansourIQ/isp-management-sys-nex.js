//import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';





export default async function UserProfile({ params }) {
  const user = await prisma.Costumers.findUnique({ where: { id: params.id } });
  const { user_name, display_name, password, debt ,id } = user ?? {};

  return (
    <main className=" space-y-4  items-center justify-between p-24">

    <div class="p-8  left-1 rounded border border-gray-200 w-full max-w-md">
  <h1 class="font-medium text-3xl">{user_name}</h1>
  <p class="text-gray-600 mt-6">display_name</p>

  <form>
    <div class="mt-8 space-y-6">
      <div>
        <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Name</label>
        <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full max-w-md"placeholder="Enter your name" />
      </div>

      <div>
        <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
        <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full max-w-md" placeholder="yourmail@provider.com" />
      </div>

      <div>
        <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Job title</label>
        <input type="text" name="job" id="job" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full max-w-md" placeholder="(ex. developer)" />
      </div>
    </div>

    <div class="space-x-4 mt-8">
      <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>

      <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
    </div>
  </form>
</div>
</main>
  );
}