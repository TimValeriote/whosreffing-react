export interface OfficialInfo {
    id: number,   
    first_name: string,
    last_name: string,
    jersey_number: number,
    leagues: string,  
  }

export interface OfficialDetails {
  id: number,
  first_name: string,
  last_name: string,
  jersey_number: number,

  games: OfficialLeagueGames[]
  official_stats: OfficialStats
}

export interface OfficialLeagueGames {
  league_name: string,
  league_id: string,
  league_games: OfficialGames[]
}

export interface OfficialGames {
  game_id: string,
  ls_game_id: string,
  league_name: string,
  league_id: string,
  home_team: string,
  visitor_team: string,
  arena: string,
  game_time: string,
  game_date: string,
  referee_one: string,
  referee_two: string,
  linesman_one: string,
  linesman_two: string,
}

export interface OfficialStats {
  leagues: string[],
  total_games: number,
  overtime_average: number,
  shootout_average: number,
  average_game_time: string,
  average_goals_per_game: number,
  average_home_goals_per_game: number,
  average_visitor_goals_per_game: number,
  average_home_penalties_per_game: number,
  average_visitor_penalties_per_game: number,
  average_home_pims_per_game: number,
  average_visitor_pims_per_game: number,
}

