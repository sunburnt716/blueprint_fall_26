
export interface ClubEvent{
    title:string;
    date: string;
    location: string;
    description: string;
    rsvpLink?:string;
}

export interface ClubData{
    ClubName: string;
    events: ClubEvent[];
}
