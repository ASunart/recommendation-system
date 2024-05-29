import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def recommend_games(preferences, games):
    compatible_games = []
    for game in games:
        # Verificar si el juego es compatible con al menos una de las plataformas preferidas por el usuario
        if any(platform['platform']['name'] in preferences['platforms'] for platform in game.platforms):
            compatible_games.append(game)
    
    if not compatible_games:
        return []

    # Crear un DataFrame de pandas con los datos de los juegos compatibles
    game_data = pd.DataFrame({
        'name': [game.name for game in compatible_games],
        'genres': [' '.join([genre['name'] for genre in game.genres]) for game in compatible_games],
        'platforms': [' '.join([platform['platform']['name'] for platform in game.platforms]) for game in compatible_games],
        'tags': [' '.join([tags['name'] for tags in game.tags]) for game in compatible_games],
        'background_image': [game.background_image for game in compatible_games]
    })
    
    # Crear una columna combinada de características
    game_data['combined_features'] = game_data['genres'] + ' ' + game_data['platforms'] + ' ' + game_data['tags']
    
    # Vectorizar los documentos
    vectorizer = CountVectorizer()
    vectors = vectorizer.fit_transform(game_data['combined_features']).toarray()
    
    # Crear un documento para las preferencias del usuario
    user_preferences = ' '.join(preferences['genres']) + ' ' + ' '.join(preferences['platforms']) + ' ' + ' '.join(preferences['tags'])
    user_vector = vectorizer.transform([user_preferences]).toarray()
    
    # Calcular similitudes
    cosine_similarities = cosine_similarity(user_vector, vectors)
    
    # Obtener los índices de los juegos más similares
    similar_indices = cosine_similarities[0].argsort()[-5:][::-1]
    
    # Seleccionar los juegos más similares
    recommended_games = game_data.iloc[similar_indices]
    
    # Convertir el DataFrame de juegos recomendados a una lista de diccionarios
    recommended_games_list = recommended_games.to_dict(orient='records')
    return recommended_games_list
    