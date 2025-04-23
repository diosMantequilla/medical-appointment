import { create } from 'zustand';
import { DoctorType } from '../utils/types';

type Appointment = {
    doctor: DoctorType;
    selectedSlot: string;
    dateBooked: Date;
};

type BookingState = {
    appointments: Appointment[];
    addAppointment: (doctor: DoctorType, slot: string) => void;
    removeAppointment: (appointmentId: string) => void;
};

export const useBookingStore = create<BookingState>((set) => ({
    appointments: [],
    addAppointment: (doctor, slot) => set((state) => ({
        appointments: [
            ...state.appointments,
            {
                doctor,
                selectedSlot: slot,
                dateBooked: new Date() // Fecha actual
            }
        ]
    })),
    removeAppointment: (appointmentId) => set((state) => ({
        appointments: state.appointments.filter((_, index) => index.toString() !== appointmentId)
    }))
}));