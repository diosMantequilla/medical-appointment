import { useState } from "react";
import DoctorCard from "../components/DoctorCard"
import { doctorsList } from "../data/mockData"
import { FaSearch } from "react-icons/fa";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modal";
import DoctorDetail from "../components/DoctorDetail";
import { DoctorType } from "../utils/types";

const DoctorsPage = () => {

    const { isOpen, open, close } = useModal();
    const topDoctor = doctorsList[doctorsList.length - 1]
    const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0])
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDoctors = doctorsList.filter(doctor => {
        const searchLower = searchTerm.toLowerCase();
        return (
            doctor.name.toLowerCase().includes(searchLower) ||
            doctor.specialty.toLowerCase().includes(searchLower) ||
            doctor.location.toLowerCase().includes(searchLower)
        );
    });
    
    const selectDoctor = (doctor:DoctorType) => {
        setSelectedDoctor(doctor)
        open()
    }

    return (
        <div>
            <section>
                <h1 className="text-3xl text-left my-2">Recommended</h1>
                <div className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg text-sm p-4 me-2 mb-2">
                    <DoctorDetail {...topDoctor} />
                </div>
            </section>
            <section>
                <h1 className="text-3xl text-left my-2">Our Doctors</h1>
                <div className="flex mb-4">
                    <span className="inline-flex items-center px-3 text-sm text-white text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        id="doctor-search"
                        className="rounded-none rounded-e-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Search by name or specialty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <h1 className='text-left'>({filteredDoctors.length}) Doctors near by you</h1>
                {filteredDoctors.length === 0 ? (
                    <p className="text-gray-500">No doctors found matching your search.</p>
                ) : (
                    filteredDoctors.map(e => <DoctorCard key={"doctor-card-" + e.id} {...e} openModal={() => selectDoctor(e)} />)
                )}
            </section>
            <Modal isOpen={isOpen} onClose={close} title="Schedule a medical appointment">
                <div className="space-y-4">
                    <DoctorDetail {...selectedDoctor} />
                </div>
            </Modal>
        </div>
    )
}

export default DoctorsPage
