"use server";
import { sql } from "@vercel/postgres";
import Testimonials from "../components/testimonials";

export async function fetchDataTestimonials() {
    try {
        const getDataTesti : any = sql`SELECT * FROM testimonials`;
        const data = await Promise.resolve(getDataTesti);
        return data;
    } catch (error) {
        return error;
    }
}
