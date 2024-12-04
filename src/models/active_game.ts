export interface ActiveGames {
    id: number,
    game_id: number,
    ls_game_id: number
}

export interface ActiveGameDetailsByLeague {
    league: string
    games: ActiveGameDetails[]
}

export interface ActiveGameDetails {
    game_id: string,
    ls_game_id: string
    home_team: string,
    visitor_team: string,
    arena: string,
    game_time: string,
    referee_one: string,
    referee_two: string,
    linesman_one: string,
    linesman_two: string,
    hasNoOfficials: boolean
}