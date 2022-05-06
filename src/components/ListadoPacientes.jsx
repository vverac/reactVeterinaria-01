import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center"> Listado Pacientes</h2>

                    <p className='text-lg mt-5 text-center mb-10'>
                        Administra tus {""}
                        <span className='text-indigo-600 font-bold text-lg'>Pacientes y Citas</span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Pacientes

                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente} // lo pasamos aca y en pacientes.jsx ya lo podemos leer 
                        />
                    ))}
                </>

            ) :
                <>
                    <h2 className="font-black text-3xl text-center"> No hay Pacientes</h2>

                    <p className='text-lg mt-5 text-center mb-10'>
                        Comienza Agregando Pacientes {""}
                        <span className='text-indigo-600 font-bold text-lg'> y apareceran en este lugar</span>
                    </p>


                </>

            }





        </div>
    )
}

export default ListadoPacientes