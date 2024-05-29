import requests

RAWG_API_KEY = 'b7667a4106ea47d5b5052513e3955e6b'

BASE_URL = 'https://api.rawg.io/api/games?key=' + RAWG_API_KEY

def fetchVideogamesData():
    response = requests.get(BASE_URL)
    results = response.json()
    return results['results']
