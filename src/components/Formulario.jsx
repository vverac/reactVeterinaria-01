import { useState, useEffect } from "react";
import Pacientes from "./Pacientes";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => { //aplicamos destructuring y extraemos  set pacientes
    //useStates
    const [nombre, setNombre] = useState('')
    // registrando mas states para los otros campos del formulario
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)


    //useEffect 

    useEffect(() => {

        if (Object.keys(paciente).length > 0) {
            // console.log(paciente)
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    }, [paciente])//este se ejecuta cada vez que paciente cambie


    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)


        return fecha + random
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('hay al menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)

        //objeto de pacientes
        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            // id: generarId()
        }
        //console.log(objetoPacientes)

        if (paciente.id) {

            objetoPacientes.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPacientes : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            //nuevo registro
            //console.log('Nuevo Registro')
            objetoPacientes.id = generarId()
            setPacientes([...pacientes, objetoPacientes])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento
                Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold text-lg">Administralos</span>
            </p>

            <form
                // podemos asociar una funcion a un evento
                onSubmit={handleSubmit}//esta es la funcion qu estamos asociando

                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">


                {error && <Error> <p> Todos los campos son obligatorios</p> </Error>

                }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value)
                        }}
                    />


                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

                        value={propietario}
                        onChange={(e) => {
                            setPropietario(e.target.value)
                        }}
                    />

                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

                        value={fecha}
                        onChange={(e) => {
                            setFecha(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Sintomas"

                        value={sintomas}
                        onChange={(e) => {
                            setSintomas(e.target.value)
                        }}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
                    cursor-pointer transition-colors"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>



        </div>

    )
}

export default Formulario