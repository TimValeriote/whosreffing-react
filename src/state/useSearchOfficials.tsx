import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from 'react';
import { OfficialInfo } from "../models/official";

export const SearchOfficialsState = atom<OfficialInfo[]>({
    key: 'SearchOfficialsState',
    default: []
});

export const useSearchOfficials = (searchTerm: string) => {
    const [officials, setSearchedOfficials] = useRecoilState(SearchOfficialsState);

    useEffect(() => {
        const fetchData = async () => {
            // Check if searchTerm is not empty before making the request
            if (searchTerm !== "") {
                try {
                    const response = await axios.get('/whosreffing/officialssearch', {
                        params: {
                            searchTerm: searchTerm
                        }
                    });

                    const searchedOfficials: OfficialInfo[] = response.data.officials;

                    setSearchedOfficials(searchedOfficials);
                } catch (error) {
                    console.error('Error fetching standings:', error);
                }
            } else {
                setSearchedOfficials([]);
            }
        };

        fetchData();
    }, [searchTerm, setSearchedOfficials]);

    return officials;
};