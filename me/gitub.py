#import requests
#from pprint import pprint

#username = "iceteaid"
#url = f"https://api.github.com/users/{username}"
#user_data = requests.get(url).json()
#pprint(user_data)

def print_repo(repo):
    print("Full name:", repo.full_name)
    print("Description:", repo.description)
    print("Date created:", repo.created_at)
    print("Date of last push:", repo.pushed_at)
    print("Home Page:", repo.homepage)
    print("Language:", repo.language)
    print("Number of forks:", repo.forks)
    print("Number of stars:", repo.stargazers_count)
    print("-"*50)
    print("Contents:")
    for content in repo.get_contents(""):
        print(content)
    try:
        print("License:", base64.b64decode(repo.get_license().content.encode()).decode())
    except:
        pass
        
import base64
from github import Github
from pprint import pprint

# Github username
username = "iceteaid"
# pygithub object
g = Github()
# get that user by username
user = g.get_user(username)

for repo in user.get_repos():
    print(repo)
    
password = "04091990Github!"

# authenticate to github
g = Github(username, password)
# get the authenticated user
user = g.get_user()
for repo in user.get_repos():
    print_repo(repo)
 
r=repo.update_file
print(r)    