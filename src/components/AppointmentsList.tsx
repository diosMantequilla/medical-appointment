import { useBookingStore } from '../stores/bookingStore';

export const AppointmentsList = () => {
    const { appointments, removeAppointment } = useBookingStore();

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>

            {appointments.length === 0 ? (
                <p className="text-gray-500">No appointments booked yet.</p>
            ) : (
                <div className="space-y-4">
                    {appointments.map((appointment, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <img
                                    src={appointment.doctor.photo}
                                    alt={appointment.doctor.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-bold">{appointment.doctor.name}</h3>
                                    <p className="text-sm text-gray-600">{appointment.doctor.specialty}</p>
                                    <p className="text-sm mt-1">
                                        <span className="font-medium">Date:</span> {appointment.selectedSlot}
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="my-2 mx-auto text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={() => removeAppointment(index.toString())}
                            >Cancel appointment</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};