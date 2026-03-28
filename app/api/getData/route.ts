
import {NextResponse} from "next/server";

// Update the data everytime the page refreshes.
export const dynamic = "force-dynamic";

const API_KEY = process.env.API_KEY;

export async function GET(): Promise<NextResponse>{

    // Make an API request to Visual Crossing to fetch weather data for the specified city.
    const res = await fetch(
        // `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`
        `https://api.thecatapi.com/v1/images/search?limit=10`
    );

    // If the API request fails (status code other than 200), return a 500 Internal Server Error response
    if(res.status !== 200){
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }

    // Parse the JSON data from the API response
    const data = await res.json();

    // Return the parsed data in the response as JSON
    return NextResponse.json(data);
}




