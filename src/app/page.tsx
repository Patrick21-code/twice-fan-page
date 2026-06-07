import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <h2 className="text-4xl font-bold text-pink-500">
        Welcome to TWICE Fan Page 💖
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        A simple Next.js project where I practice frontend development while
        building something I actually enjoy.
      </p>

      {/*CTA Section*/}
      <div className="mt-8 flex gap-4">
        <Button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
          Explore Members
        </Button>
        
        <Button variant="outline" className="px-4 py-2 border border-pink-400 text-pink-500 rounded-lg hover:bg-pink-100 transition">
          View Albums
        </Button>
      </div>
    </main>
  );
}
