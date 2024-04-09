'use client'

import _ from 'lodash'
import { useEffect, useState } from 'react'

type IListener = (visibility: boolean, message: string) => void

interface IState {
	visibility: boolean
	listener?: IListener
	subscribe: (listener: IListener) => void
	toggle: (message?: string) => void
}

const state: IState = {
	visibility: false,
	listener: undefined,
	subscribe(listener) {
		this.listener = listener
	},
	toggle(message) {
		if (this.listener) {
			this.visibility = !this.visibility
			this.listener(this.visibility, message || '')
		}
	}
}

const Loader = () => {
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState<string>()

	useEffect(() => {
		state.subscribe((visibility, message) => {
			setShow(visibility)
			setMessage(message || '')
		})
	}, [])

	if (!show) {
		return
	}

	return (
		<div id="loading-spinner" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="w-full flex flex-col justify-center items-center">
				<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
				{(() => {
					if (message) {
						return <span>{message}</span>
					}

					return null
				})()}
			</div>
		</div>
	)
}

const loading = (message: string) => {
	const close = () => {
		state.toggle()
	}

	state.toggle(message)

	return { close }
}

export { loading, Loader }
