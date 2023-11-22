import React, { useEffect, useState } from "react"

import { Link, useNavigate } from 'react-router-dom';

import usePostSignIn from "../../services/auth/usePostSignIn";

export function ProfileForm() {

	const { isError, isLoading, data, callApi } = usePostSignIn();

	const [datos, setDatos] = useState({
		nombre: '',
		apellido: '',
		email: '',
		contra: '',
	})

	const [showPassword, setShowPassword] = useState(false);

	const { nombre, apellido, email, contra } = datos

	const navigate = useNavigate()

	useEffect(()=>{

		if(isError){
			navigate('/login')
		}
		if(!isLoading && data?.success){
			navigate('/login')
		}
		
	}, [data, isError, isLoading])

	const handleChangeNombre = (e) => {
		setDatos({
			...datos,
			nombre: e.target.value
		})
	}

	const handleChangeApellido = (e) => {
		setDatos({
			...datos,
			apellido: e.target.value
		})
	}

	const handleChangeEmail = (e) => {
		setDatos({
			...datos,
			email: e.target.value
		})
	}

	const handleChangeContra = (e) => {
		setDatos({
			...datos,
			contra: e.target.value
		})
	}

	// 2. Define a submit handler.
	const handleSignIn = (e) => {

		e.preventDefault()

		callApi({
			name: nombre,
			lastname: apellido,
			email: email,
			password: contra
		})

	}

	if(isLoading){
		return(
			<p>Cargando</p>
		)
	}

	return (

		<form className='flex-col w-80 mt-20' onSubmit={handleSignIn}>

			<div className="mb-6 " >

				<label htmlFor="nombre" className="block text-neutral-700 font-medium text-xl">Nombre</label>

				<div className="relative">

					<input
						value={nombre}
						type="text"
						id="nombre"
						name="nombre"
						placeholder="Nombre..."
						className="w-full border-b-2 bg-white b border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
						onChange={handleChangeNombre}
					/>

				</div>

			</div>

			<div className="mb-6 " >

				<label htmlFor="apellido" className="block text-neutral-700 font-medium text-xl">Apellido</label>

				<div className="relative">

					<input
						value={apellido}
						type="text"
						id="apellido"
						name="apellido"
						placeholder="Apellido..."
						className="w-full border-b-2 bg-white b border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
						onChange={handleChangeApellido}
					/>

				</div>

			</div>

			<div className="mb-6" >

				<label htmlFor="email" className="block text-neutral-700 font-medium text-xl">Email</label>

				<div className="relative">

					<input
						value={email}
						type="email"
						id="email"
						name="email"
						placeholder="Email..."
						className="w-full border-b-2 bg-white b border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
						onChange={handleChangeEmail}
					/>

				</div>

			</div>


			<div className="mb-6">

				<label htmlFor="password" className="block text-xl font-medium  text-neutral-700">Contraseña</label>

				<div className="relative">

					<input
						type={showPassword ? 'text' : 'password'}
						value={contra}
						id="password"
						name="password"
						placeholder="Contraseña"
						className="w-full border-b-2 bg-white border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
						onChange={handleChangeContra}
					/>

					<div
						className="absolute right-3 top-2 text-[#B4C170] cursor-pointer"
						onClick={() => setShowPassword(!showPassword)}
					>

						{
							!showPassword ? (
								<span className="material-symbols-outlined">
									visibility_off
								</span>
							) : (
								<span className="material-symbols-outlined">
									visibility
								</span>
							)
						}

					</div>

				</div>

			</div>

			<button
				type="submit"
				className="bg-[#B4C170] shadow-xl uppercase text-white py-5  text-center text-lg  px-10 rounded-full my-8 hover:bg-[#9ca85f] w-full"
				onClick={handleSignIn}
			>
				Crear cuenta
			</button>

			<div className='flex w-full justify-center '>

				<Link to="/login" className='cursor-pointer text-[#B4C170] text-center h-full my-4 text-lg font-medium'>Ya tengo una cuenta</Link>

			</div>

		</form>
	)
}
