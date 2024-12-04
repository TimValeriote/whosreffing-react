import { FindOfficialsComponent } from "./FindOfficialsComponent";
import { useState } from "react";
import { useSearchOfficials } from "../../state/useSearchOfficials";

type FindOfficialsContainerProps = {
    darkMode: boolean;
};

export function FindOfficialsContainer({ darkMode }: FindOfficialsContainerProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const officials = useSearchOfficials(searchTerm);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    return (
        <FindOfficialsComponent
            searchedOfficials={officials}
            onSearchChange={handleSearchChange}
            darkMode={darkMode}
        />
    );
}