import {
    onGetAllStates,
    onGetStateWithDistricts,

} from '@/actions/state'
import { useEffect, useRef, useState } from 'react'
import React from 'react';





export const useStates = (searchParams?: {
    page?: string;
    query?: string;
}) => {

    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 2; // Define how many items you want per page

    // Use useEffect to fetch data when currentPage changes
    const [states, setStates] = React.useState<{
        id: number;
        name: string;
        slug: string;
        years: {
            data: {
                totalPopulationPersons: number | null;
            } | null;
            year: number;
            rural_data: {
                totalPopulationPersons: number | null;
            } | null;
            urban_data: {
                totalPopulationPersons: number | null;
            } | null;
        }[];
    }[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [pageCount, setPageCount] = useState<number>(1)

    const getAllState = async () => {
        setLoading(true)
        try {

            const states = await onGetAllStates(currentPage, itemsPerPage);

            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedStates = states && states.states ? states?.states: [];
            // const pageCount = state && state.districts ? Math.ceil(state.districts.length / itemsPerPage) : 0;
            if (states) {
                console.log("states",states)
                setStates(paginatedStates)
                setPageCount(states.pageCount)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        getAllState()
    }, [currentPage])



    return {
        states,
        loading,
        pageCount,
        getAllState,
    }
}



export const useStatesInfo = (slug: string, searchParams?: {
    page?: string;
    query?: string;
}) => {

    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 2; // Define how many items you want per page

    // Use useEffect to fetch data when currentPage changes
    const [districts, setDistricts] = React.useState<{
        id: number;
        name: string;
        slug: string;
        years: {
            data: {
                totalPopulationPersons: number | null;
            } | null;
            year: number;
            rural_data: {
                totalPopulationPersons: number | null;
            } | null;
            urban_data: {
                totalPopulationPersons: number | null;
            } | null;
        }[];
    }[]>([]);

    const [stateTotalData, setstateTotalData] = React.useState<{
        noOfHousehold: number | null;
        totalPopulationPersons: number | null
        totalPopulationMales: number | null
        totalPopulationFemales: number | null
        literatesPersons: number | null
        literatesMales: number | null
        literatesFemales: number | null
    } | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [stateName, setStateName] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    const AllDistictsUnderState = async () => {
        setLoading(true)
        try {

            const state = await onGetStateWithDistricts(slug, currentPage, itemsPerPage);

            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedStates = state && state.districts ? state?.districts: [];
            // const pageCount = state && state.districts ? Math.ceil(state.districts.length / itemsPerPage) : 0;
            if (state) {
                console.log("state",state)
                setDistricts(paginatedStates)
                setStateName(state.stateName)
                setstateTotalData(state.stateData)
                setPageCount(state.pageCount)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        AllDistictsUnderState()
    }, [slug, currentPage])



    return {
        districts,
        loading,
        stateName,
        pageCount,
        stateTotalData,
    }
}
