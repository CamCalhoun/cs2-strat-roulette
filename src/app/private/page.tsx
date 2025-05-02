import { redirect } from 'next/navigation'

import { createClient } from '@/lib/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  console.log(supabase.auth)
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log(error)
    redirect('/login')
  }

  return <p className='pt-24 text-white'>Hello {data.user.email}</p>
}