import {AuthForm} from "@/app/auth/components/AuthForm";

const Auth = () => {
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12"/>
        </nav>
        <AuthForm />
      </div>
    </div>
  )
}

export default Auth
