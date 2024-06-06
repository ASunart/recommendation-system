from flask import Flask, request, jsonify 
from flask_cors import CORS 
import pandas as pd
from recommender import recommend_games
from data import fetchVideogamesData


# Declare the APP server instance
app = Flask(__name__)
# Enable CORS policies
CORS(app)

api_data = fetchVideogamesData()

data = pd.DataFrame(api_data)


class Game:
    def __init__(self, id, slug, name, genres, parent_platforms, tags, background_image, metacritic, released):
        self.id = id
        self.slug = slug
        self.name = name
        self.genres = genres
        self.parent_platforms = parent_platforms
        self.tags = tags
        self.background_image = background_image
        self.metacritic = metacritic
        self.released = released


games = [Game(row['id'],  
              row['slug'],
                row['name'],
                  row['genres'],
                    row['parent_platforms'],
                      row['tags'],
                        row['background_image'],
                          row['metacritic'],
                            row['released']) for index, 
                            row in data.iterrows()]

# GET Endpoint =============================================================================
@app.route("/", methods=["GET"])
def index():
  return jsonify({"message": "Hello World"}), 200

# Definición del endpoint POST
@app.route("/recommend", methods=["POST"])
def post_recommendation():
    user_preferences = request.json
    recommended_games = recommend_games(user_preferences, games)
    return jsonify(recommended_games), 201
  
  
# Execute the app instance
# The app will run locally in: http://localhost:5001/ after execution
if __name__ == "__main__":
  app.run(debug=True, port=5001)