import Navbar from '@/components/navbar';
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return(
    <>
      <Navbar />
      <p>Post: {router.query.slug}</p>
    </>
    
  );
}