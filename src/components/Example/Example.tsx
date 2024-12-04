import { useState } from 'react';
import { getRouteData } from '../../services/utils';
import styles from './Example.module.scss';

interface Props {
    flippable: boolean
}

interface Card {
    name: string,
    team1: string,
    team2: string,
    arena: string,
    gametime: string,
    league: string,
    officials: {
        ref1: string,
        ref2: string,
        linesman1: string,
        linesman2: string
    }
}

type CardState = {
    [key: number]: boolean
}

const Example = ({flippable}: Props) => {
    const [cardFlipped, setCardFlipped] = useState<CardState>({});
    const [cardsTest, setCardsTest] = useState<any>([]);

    const cardFeed = (card: Card, index: number) => {
        console.log(card, index)
        return (
            <div className={styles.card} onClick={() => {flippable && setCardFlipped((old:any) => ({
                ...old, 
                [index]: !old[index]
            }))}}>
                <b>{card.team1} vs {card.team2}</b>
                {handleContentFeed(card, index)}
            </div>
        )
    }

    const handleContentFeed = (card: Card, index: number) => {
        if (flippable) {
            return (
                <>{cardFlipped[index] ? backSideContent(card) : frontSideContent(card)}</>
            )
        } else {
            return (
                <>
                    {backSideContent(card)}
                    {frontSideContent(card)}
                </>
            )
        }
    }

    const frontSideContent = (card: Card) => {
        return (
            <div onClick={() => console.log(getRouteData('activegames', null))}>
                <div>Referee 1: {card.officials.ref1}</div>
                <div>Referee 2: {card.officials.ref2}</div>
                <div>Linesman 1: {card.officials.linesman1}</div>
                <div>Linesman 2: {card.officials.linesman2}</div>
            </div>
        )
    }

    const backSideContent = (card: Card) => {
        return (
            <div>
                <div>Arena: {card.arena}</div>
                <div>Gametime: {card.gametime}</div>
                <div>League: {card.league}</div>
                <div>Gamesheet *</div>
            </div>
        )
    }

    const hockeyGames = [
        {
          name: "Game 1",
          team1: "Montreal Canadiens",
          team2: "Toronto Maple Leafs",
          arena: "Bell Centre",
          gametime: "2023-10-17T19:00:00",
          league: "NHL",
          officials: {
            ref1: "John Smith",
            ref2: "Sarah Johnson",
            linesman1: "David Brown",
            linesman2: "Emily White"
          }
        },
        {
          name: "Game 2",
          team1: "New York Rangers",
          team2: "Boston Bruins",
          arena: "Madison Square Garden",
          gametime: "2023-10-18T20:00:00",
          league: "NHL",
          officials: {
            ref1: "Michael Davis",
            ref2: "Laura Wilson",
            linesman1: "Paul Anderson",
            linesman2: "Michelle Lee"
          }
        },
        {
          name: "Game 3",
          team1: "Chicago Blackhawks",
          team2: "Detroit Red Wings",
          arena: "United Center",
          gametime: "2023-10-19T18:30:00",
          league: "NHL",
          officials: {
            ref1: "Robert Garcia",
            ref2: "Jennifer Martinez",
            linesman1: "Daniel Johnson",
            linesman2: "Anna Turner"
          }
        },
        {
          name: "Game 4",
          team1: "Edmonton Oilers",
          team2: "Calgary Flames",
          arena: "Rogers Place",
          gametime: "2023-10-20T19:30:00",
          league: "NHL",
          officials: {
            ref1: "William Brown",
            ref2: "Melissa Adams",
            linesman1: "George Taylor",
            linesman2: "Olivia Davis"
          }
        },
        {
          name: "Game 5",
          team1: "Pittsburgh Penguins",
          team2: "Washington Capitals",
          arena: "PPG Paints Arena",
          gametime: "2023-10-21T19:15:00",
          league: "NHL",
          officials: {
            ref1: "Richard Wilson",
            ref2: "Samantha Harris",
            linesman1: "Thomas Miller",
            linesman2: "Grace Roberts"
          }
        },
        {
          name: "Game 6",
          team1: "Los Angeles Kings",
          team2: "San Jose Sharks",
          arena: "Staples Center",
          gametime: "2023-10-22T20:00:00",
          league: "NHL",
          officials: {
            ref1: "Charles Johnson",
            ref2: "Jessica Turner",
            linesman1: "Mark Davis",
            linesman2: "Emma Wilson"
          }
        },
        {
          name: "Game 7",
          team1: "Ottawa Senators",
          team2: "Vancouver Canucks",
          arena: "Canadian Tire Centre",
          gametime: "2023-10-23T18:45:00",
          league: "NHL",
          officials: {
            ref1: "Daniel Smith",
            ref2: "Olivia Brown",
            linesman1: "Andrew Anderson",
            linesman2: "Sophia Garcia"
          }
        },
        {
          name: "Game 8",
          team1: "Dallas Stars",
          team2: "Nashville Predators",
          arena: "American Airlines Center",
          gametime: "2023-10-24T19:30:00",
          league: "NHL",
          officials: {
            ref1: "Ethan Turner",
            ref2: "Ava Miller",
            linesman1: "James Davis",
            linesman2: "Lily Wilson"
          }
        },
        {
            name: "Game 1",
            team1: "Montreal Canadiens",
            team2: "Toronto Maple Leafs",
            arena: "Bell Centre",
            gametime: "2023-10-17T19:00:00",
            league: "NHL",
            officials: {
              ref1: "John Smith",
              ref2: "Sarah Johnson",
              linesman1: "David Brown",
              linesman2: "Emily White"
            }
          },
          {
            name: "Game 2",
            team1: "New York Rangers",
            team2: "Boston Bruins",
            arena: "Madison Square Garden",
            gametime: "2023-10-18T20:00:00",
            league: "NHL",
            officials: {
              ref1: "Michael Davis",
              ref2: "Laura Wilson",
              linesman1: "Paul Anderson",
              linesman2: "Michelle Lee"
            }
          },
          {
            name: "Game 3",
            team1: "Chicago Blackhawks",
            team2: "Detroit Red Wings",
            arena: "United Center",
            gametime: "2023-10-19T18:30:00",
            league: "NHL",
            officials: {
              ref1: "Robert Garcia",
              ref2: "Jennifer Martinez",
              linesman1: "Daniel Johnson",
              linesman2: "Anna Turner"
            }
          },
          {
            name: "Game 4",
            team1: "Edmonton Oilers",
            team2: "Calgary Flames",
            arena: "Rogers Place",
            gametime: "2023-10-20T19:30:00",
            league: "NHL",
            officials: {
              ref1: "William Brown",
              ref2: "Melissa Adams",
              linesman1: "George Taylor",
              linesman2: "Olivia Davis"
            }
          },
          {
            name: "Game 5",
            team1: "Pittsburgh Penguins",
            team2: "Washington Capitals",
            arena: "PPG Paints Arena",
            gametime: "2023-10-21T19:15:00",
            league: "NHL",
            officials: {
              ref1: "Richard Wilson",
              ref2: "Samantha Harris",
              linesman1: "Thomas Miller",
              linesman2: "Grace Roberts"
            }
          },
          {
            name: "Game 6",
            team1: "Los Angeles Kings",
            team2: "San Jose Sharks",
            arena: "Staples Center",
            gametime: "2023-10-22T20:00:00",
            league: "NHL",
            officials: {
              ref1: "Charles Johnson",
              ref2: "Jessica Turner",
              linesman1: "Mark Davis",
              linesman2: "Emma Wilson"
            }
          },
          {
            name: "Game 7",
            team1: "Ottawa Senators",
            team2: "Vancouver Canucks",
            arena: "Canadian Tire Centre",
            gametime: "2023-10-23T18:45:00",
            league: "NHL",
            officials: {
              ref1: "Daniel Smith",
              ref2: "Olivia Brown",
              linesman1: "Andrew Anderson",
              linesman2: "Sophia Garcia"
            }
          },
          {
            name: "Game 8",
            team1: "Dallas Stars",
            team2: "Nashville Predators",
            arena: "American Airlines Center",
            gametime: "2023-10-24T19:30:00",
            league: "NHL",
            officials: {
              ref1: "Ethan Turner",
              ref2: "Ava Miller",
              linesman1: "James Davis",
              linesman2: "Lily Wilson"
            }
          }
      ];

    return (
        <div className={styles.cards}>
            {hockeyGames.map((card, i) => (
                <>{cardFeed(card, i)}</>
            ))}
        </div>
    )
}

export default Example;