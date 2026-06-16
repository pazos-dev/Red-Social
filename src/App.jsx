import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterStart } from './routers/Router'
import { useThemeStore } from './store/ThemeStore'

function App() {
  const queryClient = new QueryClient()
  const { theme } = useThemeStore()
  document.documentElement.classList.toggle('dark', theme === 'dark')

  return (
    <QueryClientProvider client={queryClient}>
      <RouterStart />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
