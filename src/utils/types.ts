export interface DoctorType {
    id: number,
    name: string,
    specialty: string,
    rating: number,
    availability: Array<string>,
    location: string,
    photo: string,
}
