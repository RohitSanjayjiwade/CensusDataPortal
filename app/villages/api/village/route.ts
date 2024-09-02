import { NextRequest } from "next/server";
import { getVillageByQuery } from "@/actions/village";

export async function GET(request: NextRequest){
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
    console.log("query",query)
	const filterComments = query ? await getVillageByQuery(query) : [];
	return Response.json(filterComments);
}