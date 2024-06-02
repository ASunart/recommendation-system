import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def recommend_games(preferences, games):
    compatible_games = []
    for game in games:
        # Verify if the game is compatible with at least one of the user's preferred platforms and genres
        if any(platform['platform']['name'] in preferences['platforms'] for platform in game.parent_platforms):
            if any(genre['name'] in preferences['genres'] for genre in game.genres):
                compatible_games.append(game)

    if not compatible_games:
        return ["There's no compatible games"]

    # Create a DataFrame with the compatible games data
    game_data = pd.DataFrame({
        'id': [game.id for game in compatible_games],
        'name': [game.name for game in compatible_games],
        'genres': [' '.join([genre['name'] for genre in game.genres]) for game in compatible_games],
        'parent_platforms': [' '.join([platform['platform']['name'] for platform in game.parent_platforms]) for game in compatible_games],
        'tags': [' '.join([tags['name'] for tags in game.tags]) for game in compatible_games],
        'background_image': [game.background_image for game in compatible_games],
        'metacritic': [game.metacritic for game in compatible_games],
    })

    # Create a combined feature column
    game_data['combined_features'] = game_data['genres'] + ' ' + game_data['parent_platforms'] + ' ' + game_data['tags']

    # Vectorize the documents
    vectorizer = CountVectorizer()
    vectors = vectorizer.fit_transform(game_data['combined_features']).toarray()

    # Create a document for the user's preferences
    user_preferences = ' '.join(preferences['genres']) + ' ' + ' '.join(preferences['platforms']) + ' ' + ' '.join(preferences['tags'])
    user_vector = vectorizer.transform([user_preferences]).toarray()

    # Calculate similarities
    cosine_similarities = cosine_similarity(user_vector, vectors)

    # Get the indices of the most similar games
    similar_indices = cosine_similarities[0].argsort()[-5:][::-1]

    # Select the most similar games
    recommended_games = game_data.iloc[similar_indices]

    # Convert the recommended games DataFrame to a list of dictionaries
    recommended_games_list = recommended_games.to_dict(orient='records')
    for game in recommended_games_list:
        game['genres'] = game['genres'].split()
        game['parent_platforms'] = game['parent_platforms'].split()
        game['tags'] = game['tags'].split()

    return recommended_games_list
