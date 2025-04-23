
import { DoctorType } from "../utils/types"

interface DoctorCard extends DoctorType {
    openModal: any,
}

const DoctorCard = ({ name, specialty, rating, location, photo, openModal }: DoctorCard) => {
    return (
        <div className='border-2 rounded-xl border-solid flex min-h-[100px] max-w-[600px] my-4'>
            <div className='w-40 flex items-center'>
                <img src={photo} alt="doctor" />
            </div>
            <div className='text-left w-full p-2 flex flex-col justify-around'>
                <p className="text-2xl">{name}</p>
                <p>{rating}</p>
                <p>{specialty} - {location}</p>
                <button
                    onClick={openModal}
                    type="button"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >More</button>
            </div>
        </div>
    )
}

export default DoctorCard
