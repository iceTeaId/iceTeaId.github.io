from bs4 import BeautifulSoup
import csv
import requests

url = 'https://www.bbc.co.uk/sport/football/premier-league/table'

page = requests.get(url)

soup = BeautifulSoup(page.content,'html.parser')
table = soup.find('tbody',attrs={'class':'gel-long-primer '})
tableRows = table.find_all('tr')

rows = []
header = ['Rank','Team','Played','Won','Drawn','Lose','Goals Difference','Points']
rows.append(header)
for tableRow in tableRows:
    data = tableRow.find_all('td')

    rank = data[0].getText()
    team = data[2].getText()
    played_count = data[3].getText()
    won_count = data[4].getText()
    drawn_count = data[5].getText()
    lose_count = data[6].getText()
    goals_diff = data[9].getText()
    points = data[10].getText()

    rows.append([rank,team,played_count,won_count,drawn_count,lose_count,goals_diff,points])

with open('premier_league.csv','w',newline='') as file:
    output = csv.writer(file)
    output.writerows(rows)