export const SelectTravelesList = [
    {
        id: 1,
        title: "Just Me",
        desc: "A sole travels in exploration",
        icon: "👤",
        people: "1",
    },
    {
        id: 2,
        title: "A Couple",
        desc: "Two travels in tandem",
        icon: "👫",
        people: "2 People",
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of fun loving adv",
        icon: "👪",
        people: "3 to 5 people",
    },
    {
        id: 4,
        title: "Friends",
        desc: "A group of friends on a trip",
        icon: "👬",
        people: "6 to 10 people",
    },
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: "Stay conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        desc: "Keep cost on the average side",
        icon: "💰",
    },
    {
        id: 3,
        title: "Expensive",
        desc: "Money is not a concern",
        icon: "💸",
    },
];

export const AI_PROMPT =
    "Generate Travel Plan for Location : {location}.for {totalDays} Days for {traveler} with a {budget} budget,give me Hotels options list with HotelName, Hotel address, Price, HotelImageUrl, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details,PlaceImageUrl, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. ";
