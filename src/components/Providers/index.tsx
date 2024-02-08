// import { ThemeProvider } from '@/components/ThemeProvider'

type ProviderProps = {
  children: React.ReactNode
  params: { locale: string }
}

export function Providers({ children }: ProviderProps) {
  return (
    <>
      {/* <ThemeProvider> */}
      {children}
      {/* </ThemeProvider> */}
    </>
  )
}
