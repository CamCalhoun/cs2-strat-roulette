import { Button } from '@/components/ui/button'
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <section className='flex flex-col max-w-md mt-24 gap-6 h-1/3 min-h-fit bg-slate-100 p-8 rounded-lg drop-shadow-sm drop-shadow-slate-50 mx-auto'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-center font-semibold text-lg'>Sign in to Strat Roulette</h1>
        <h2 className='text-center text-slate-600 text-md'>We're happy to see you back!</h2>
      </div>
      <form className='flex flex-col gap-2'>
        <div className='flex justify-evenly'>
          <Button className="text-lg self-end max-w-24 bg-slate-200" variant="outline">Google</Button>
          <Button className="text-lg self-end max-w-24 bg-slate-200" variant="outline">Microsoft</Button>
        </div>
        <label htmlFor="email">Email:</label>
        <input className='bg-slate-50 border-slate-300 border p-2 rounded-lg' placeholder='Enter your email here' id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input className='bg-slate-50 border-slate-300 border p-2 rounded-lg' id="password" name="password" placeholder='Enter your password here' type="password" required />
        {/* <button className='self-end' formAction={login}>Log in</button>
        <button className='self-end' formAction={signup}>Sign up</button> */}
        <div className='flex gap-4 flex-col p-4'>
          <Button className="text-lg self-end w-full text-white" formAction={login} variant="default">Log in</Button>
          <Button className="text-lg self-end w-full text-white" formAction={signup} variant="default">Sign up</Button>
        </div>
      </form>
    </section>
  )
}