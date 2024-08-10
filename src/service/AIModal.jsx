/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url and take correct Img URL from google, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_details\": {\n    \"location\": \"Las Vegas\",\n    \"duration\": \"3 days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotel_options\": [\n    {\n      \"HotelName\": \"Circus Circus Hotel & Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"Price\": \"$35 - $70 per night\",\n      \"HotelImageUrl\": \"https://www.circuscircus.com/content/dam/MGM/circus-circus/images/hotel/exterior/circus-circus-exterior-night.jpg\",\n      \"GeoCoordinates\": \"36.1166, -115.1724\",\n      \"Rating\": \"3.5 stars\",\n      \"Description\": \"Family-friendly hotel with a circus theme, affordable rooms, and an Adventuredome indoor amusement park.\"\n    },\n    {\n      \"HotelName\": \"Excalibur Hotel & Casino\",\n      \"HotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"Price\": \"$40 - $80 per night\",\n      \"HotelImageUrl\": \"https://www.mgmresorts.com/content/dam/MGM/excalibur/images/hotel/exterior/excalibur-exterior-night.jpg\",\n      \"GeoCoordinates\": \"36.0997, -115.1762\",\n      \"Rating\": \"3.5 stars\",\n      \"Description\": \"Medieval-themed hotel with affordable rooms, a pool complex, and access to the Tournament of Kings dinner show.\"\n    },\n    {\n      \"HotelName\": \"Luxor Hotel & Casino\",\n      \"HotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n      \"Price\": \"$50 - $100 per night\",\n      \"HotelImageUrl\": \"https://www.mgmresorts.com/content/dam/MGM/luxor/images/hotel/exterior/luxor-exterior-night.jpg\",\n      \"GeoCoordinates\": \"36.0987, -115.1736\",\n      \"Rating\": \"4 stars\",\n      \"Description\": \"Egyptian-themed hotel with affordable rooms, a large pool complex, and the popular Blue Man Group show.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"best_time_to_visit\": \"Morning to Afternoon\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"PlaceDetails\": \"A pedestrian mall with a vibrant atmosphere, live music, street performers, and the Viva Vision light show.\",\n          \"PlaceImageUrl\": \"https://www.vegastripping.com/wp-content/uploads/2019/04/Fremont-Street-Experience-Las-Vegas.jpg\",\n          \"GeoCoordinates\": \"36.1699, -115.1403\",\n          \"TicketPricing\": \"Free\",\n          \"TimeToTravel\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"PlaceDetails\": \"An outdoor museum showcasing vintage neon signs from Las Vegas's history.\",\n          \"PlaceImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2019/04/Neon-Museum-Boneyard-Las-Vegas-NV-1.jpg\",\n          \"GeoCoordinates\": \"770 Las Vegas Blvd N, Las Vegas, NV 89101\",\n          \"TicketPricing\": \"$28 per person\",\n          \"TimeToTravel\": \"1-2 hours\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"best_time_to_visit\": \"Afternoon to Evening\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"PlaceDetails\": \"A stunning indoor garden with seasonal floral displays and intricate sculptures.\",\n          \"PlaceImageUrl\": \"https://www.bellagio.com/images/conservatory/bellagio-conservatory-gardens-fall-2023.jpg\",\n          \"GeoCoordinates\": \"36.1067, -115.1747\",\n          \"TicketPricing\": \"Free\",\n          \"TimeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"The Fountains of Bellagio\",\n          \"PlaceDetails\": \"A choreographed water show set to music, with fountains shooting water high into the air.\",\n          \"PlaceImageUrl\": \"https://www.bellagio.com/images/fountains/bellagio-fountains-night.jpg\",\n          \"GeoCoordinates\": \"36.1067, -115.1747\",\n          \"TicketPricing\": \"Free\",\n          \"TimeToTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"PlaceDetails\": \"A giant Ferris wheel offering panoramic views of the Las Vegas Strip.\",\n          \"PlaceImageUrl\": \"https://www.caesars.com/linq/things-to-do/high-roller/images/high-roller-observation-wheel-las-vegas.jpg\",\n          \"GeoCoordinates\": \"36.1167, -115.1714\",\n          \"TicketPricing\": \"$35 per person\",\n          \"TimeToTravel\": \"30-45 minutes\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"best_time_to_visit\": \"Morning to Afternoon\",\n      \"places\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"PlaceDetails\": \"A massive concrete dam on the Colorado River, offering tours and stunning views.\",\n          \"PlaceImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Hoover_Dam_Nevada_USA.jpg/1280px-Hoover_Dam_Nevada_USA.jpg\",\n          \"GeoCoordinates\": \"36.0167, -114.7233\",\n          \"TicketPricing\": \"$30 per person\",\n          \"TimeToTravel\": \"3-4 hours (including travel time)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"PlaceDetails\": \"A scenic canyon with hiking trails, rock climbing, and stunning red rock formations.\",\n          \"PlaceImageUrl\": \"https://www.nps.gov/reda/planyourvisit/images/Red-Rock-Canyon-Scenic-Drive-1.jpg\",\n          \"GeoCoordinates\": \"36.1699, -115.2894\",\n          \"TicketPricing\": \"$15 per vehicle\",\n          \"TimeToTravel\": \"2-3 hours\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This is just a sample itinerary and can be customized based on your interests and preferences.\n* Prices are approximate and may vary depending on the time of year and availability.\n* Consider purchasing a multi-attraction pass if you plan to visit several attractions.\n* Public transportation is available in Las Vegas, but taxis and ride-sharing services are also convenient options.\n* Be sure to stay hydrated and wear comfortable shoes, as you will be doing a lot of walking.\n\n**Enjoy your trip to Las Vegas!**"},
          ],
        },
      ],
    });
