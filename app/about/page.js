import { redirect } from 'express/lib/response';
import { Metadata } from 'next';
import { Redirect } from 'next';
import { getServerSession } from 'next-auth';
export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default function Blog() {
  const session = getServerSession()
  if(!session){
    redirect('/api/auth/signin')
  }
  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}