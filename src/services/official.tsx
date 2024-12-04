import axios from "axios";
import { useEffect, useState } from 'react';

interface OfficialInfo {
  id: number,   
  first_name: string,
  last_name: string,
  jersey_number: number,   
}

const useOfficialInfo = (officialId: number) => {
  const [officialInfo, setOfficialInfo] = useState<OfficialInfo | null>(null);

  useEffect(() => {
    const fetchOfficialInfo = async () => {
      try {
        const response = await fetch(`/whosreffing/official/${officialId}`);
        const data = await response.json();

        if (response.ok) {
          const officialInfoData: OfficialInfo = data.official;
          setOfficialInfo(officialInfoData);
        } else {
          console.error('Error fetching official info:', (data as any).error);
        }
      } catch (error) {
        console.error('Error fetching official info:', (error as Error).message);
      }
    };

    // Only fetch data when gameId changes
    fetchOfficialInfo();
  }, [officialId]);

  return officialInfo;
};

export {useOfficialInfo};
