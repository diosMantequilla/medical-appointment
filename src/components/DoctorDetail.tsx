import { useState } from 'react';
import { useBookingStore } from '../stores/bookingStore';
import { DoctorType } from '../utils/types';

const DoctorDetail = (topDoctor: DoctorType) => {
  const addAppointment = useBookingStore((state) => state.addAppointment);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleBooking = (slot: string) => {
    addAppointment(topDoctor, slot);
    setSelectedSlot(slot);
    // Aquí podrías añadir una notificación o redirección
  };

  return (
    <div>
      <div className="m-2">
        <img className="rounded-lg max-h-[300px] m-auto" src={topDoctor.photo} alt={topDoctor.name} />
      </div>
      <div className="m-2 text-left">
        <p className="text-lg font-semibold text-gray-600">{topDoctor.specialty}</p>
        <h1 className="text-2xl font-bold">{topDoctor.name}</h1>
        
        {selectedSlot && (
          <div className="p-3 my-2 bg-green-100 text-green-800 rounded-lg">
            <p>✅ Appointment scheduled: <strong>{selectedSlot}</strong></p>
          </div>
        )}

        <p className="text-right text-xl mt-4 font-medium">Availability</p>
        <div className="mt-2">
          {topDoctor.availability.map((slot) => (
            <button
              key={`${topDoctor.name}-${slot}`}
              onClick={() => handleBooking(slot)}
              disabled={selectedSlot === slot}
              className={`w-full my-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                selectedSlot === slot ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail
