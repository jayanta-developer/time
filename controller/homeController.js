const { json } = require('body-parser');
const fs = require('fs');
const homeTemplate = require('../views/home');

const data = [
  {
  "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4  Million",
  "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
  },
  {
  "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
  "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
  },
  {
  "title": "Moderna Booster May Wane After 6 Months",
  "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
  },
  {
  "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
  "link":"https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
  },
  {
  "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
  "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
  },
  {
  "title": "We Urgently Need a New National COVID-19 Response Plan",
  "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
  }
  
]
const data1 = [
 {"title": "Bono",
 "stories": "Bono: America Might Be the Greatest Song the World Has Yet to Hear"
},
{
  "title": "Richard Stengel",
  "stories": "Ukrainian Refugees Try to Find Their Way in Poland"
},
{
  "title": "Steven Phillips , Michael Mina",
  "stories": "The Key Policy We Need to End the Pandemic Is Being Ignored"
},
{
  "title": "Janell Ross",
  "stories": "Behind the Racial Disparities in the US Child-Welfare System"
},
{
  "title": "Nick Hanauer",
  "stories": "America Gave Up on Overtime—and It’s Costing Workers $35,451 a Year"
},
{
  "title": "Rebecca Soffer",
  "stories": "Don't Say You 'Can't Imagine' the Grief of Those Who Have Lost Loved Ones. Ask Them to Tell You Their Stories"
}]



exports.home= async(req, res)=>{  
  res.send(homeTemplate({data, data1}))
}