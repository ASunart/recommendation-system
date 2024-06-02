import requests

RAWG_API_KEY = 'b7667a4106ea47d5b5052513e3955e6b'
PAGE_SIZE = 40
BASE_URL = f'https://api.rawg.io/api/games?key={RAWG_API_KEY}&page_size={PAGE_SIZE}'

def fetchVideogamesData():
    all_games = []
    page = 1
    max_pages = 15

    while page <= max_pages:
        response = requests.get(f"{BASE_URL}&page={page}")
        
        if response.status_code != 200:
            print(f"Error: received status code {response.status_code}")
            break

        try:
            results = response.json()
        except requests.exceptions.JSONDecodeError as e:
            print("Error decoding JSON:")
            break

        if 'results' in results:
            all_games.extend(results['results'])
            if not results.get('next'):  # Check if there is a next page
                break
            page += 1
        else:
            break

    return all_games
