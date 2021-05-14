# Project Overview

## NBA-Player-Rankings

nbaplayerrankings.netlify.app

## Project Description

User can choose to rank players. They will be able to re-order the list, add and delete players.

## Wireframes

https://whimsical.com/nba-player-rankings2-5jgB4E72u9F4aZM54Q8psT

## Component Hierarchy

https://drive.google.com/file/d/1P40wX2SMLlzjL15tDtrgeHwCp148M4y2/view?usp=sharing

## API and Data Sample

https://airtable.com/tbl8RRi0XQnXPPj43

```json
{
    "records": [
        {
            "id": "recBwfuAE3W2kDd5N",
            "fields": {
                "name": "Steph Curry",
                "team": "Golden State Warriors",
                "comments": "Most unguardable pg in history ",
                "rank": "1"
            },
            "createdTime": "2021-05-07T15:54:22.000Z"
        },
        {
            "id": "rec8C09S8eTK2whq2",
            "fields": {
                "name": "Lebron James",
                "team": "Los Angelos Lakers",
                "comments": "Arguably best all around player ever",
                "rank": "2"
            },
            "createdTime": "2021-05-07T15:54:22.000Z"
        },
        {
            "id": "reci2356OFl0haVgH",
            "fields": {
                "name": "Nikola Jokic",
                "team": "Denver Nuggets",
                "rank": "3"
            },
            "createdTime": "2021-05-07T15:54:22.000Z"
        }
    ],
    "offset": "reci2356OFl0haVgH"
}
}
```

#### MVP

- Access data through Airtable
- Render data on page via Api Get Call
- Allow users to post and delete data
- Post: Allow user to create or edit players. They have the option of adding in comments in textArea below.
- User can delete field options. This is then reflected using toggleFetch.

#### PostMVP

- Add in photos
- Add second API with more data covering statistics
- Team names could be anchors to offical team websites
- Share with friends button for mobile
- Additional comment section below the rankings list where fans can engage with eachother like a message board.

## Project Schedule

| Day       | Deliverable                                                                    | Status     |
| --------- | ------------------------------------------------------------------------------ | ---------- |
| May 12-14 | Prompt / Wireframes / Priority Matrix / Timeframes                             | Incomplete |
| May 7     | Project Approval                                                               | Incomplete |
| May 8     | Core Application Structure (Boiler Plates, skeleton react html, App.css, etc.) | Incomplete |
| May 9     | Pseudocode / actual code                                                       | Incomplete |
| May 10    | Initial Render                                                                 | Incomplete |
| May 11    | App is functinal / CSS work                                                    | Incomplete |
| May 12    | MVP Complete                                                                   | Incomplete |
| May 13    | Post MVP                                                                       | Incomplete |
| May 14    | Presentations                                                                  | Incomplete |

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Airtable setup          |    H     |      1hrs      |      hr       |     hr      |
| Initial React Setup     |    H     |      3hrs      |      hrs      |     hrs     |
| Pseudo Code             |    H     |      1hrs      |      hr       |     hr      |
| Populate Data/API Call  |    H     |      4hrs      |      hrs      |     hrs     |
| Data population on page |    H     |      4hrs      |      hrs      |     hrs     |
| Create Form Component   |    H     |      4hrs      |      hrs      |     hrs     |
| Add Button              |    H     |      3hrs      |      hrs      |     hrs     |
| Render new data on page |    H     |      3hrs      |      hrs      |     hrs     |
| Data deletion button    |    H     |      3hrs      |      hr       |     hr      |
| Components CSS          |    H     |      4hrs      |      hrs      |     hrs     |
| Media Query CSS         |    H     |      4hrs      |      hrs      |     hrs     |
| Total                   |    H     |     34hrs      |      hrs      |     hrs     |

## SWOT Analysis

### Strengths:

I can plan with some confidence what I need to do for this project to get done in the timeframe I have. And I have the resources to help if i get stuck along the way.

### Weaknesses:

I still have room for growth in understanding class components as we focused on functional components to start the unit. I am still catching up on that. But there is time for me to catch up

### Opportunities:

I am really excited to get this app off the ground. It holds personal interest as well so there is some added motivation. Mainly I want to incorporate what I've learned these last 2 weeks and keep on improving. I see this all as guaranteed growth.

### Threats:

I know there will be bugs and I will need to allocate time to debugging. I just have to remember when to step away and come back to it. And not sink further. Time management is something of a threat I can work on.
