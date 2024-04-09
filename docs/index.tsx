import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
	return (
		<div className="app-container bg-basic-white mx-5">
			<div className="space-y-6 md:block">
				<div className="flex space-y-8  h-screen">
					<aside className="w-2/12 border-r border-t border-gray-300"></aside>
					<div className="mx-8"></div>
				</div>
			</div>
		</div>
	)
}

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
)
