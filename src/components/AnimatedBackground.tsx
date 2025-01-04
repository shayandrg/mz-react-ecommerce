export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-x-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    )
  }