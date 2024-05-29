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
    def __init__(self, name, genres, platforms, tags, background_image):
        self.name = name
        self.genres = genres
        self.platforms = platforms
        self.tags = tags
        self.background_image = background_image


games = [Game(row['name'],
                row['genres'],
                 row['platforms'],
                  row['tags'],
                    row['background_image']) for index, 
                      row in data.iterrows()]

# GET Endpoint =============================================================================
@app.route("/", methods=["GET"])
def index():
  return jsonify({"message": "Hello World"})

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