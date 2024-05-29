import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Datos de ejemplo (usuarios y elementos)
usuarios = {
    'Usuario1': {'pelicula1': 5, 'pelicula2': 4, 'pelicula3': 3},
    'Usuario2': {'pelicula1': 2, 'pelicula2': 5, 'pelicula3': 1},
    'Monk': {'pelicula1': 5, 'pelicula2': 1, 'pelicula3': 0}

    # Agrega más usuarios si es necesario
}

elementos = {
    'pelicula1': {'accion': 1, 'comedia': 0, 'romance': 1},
    'pelicula2': {'accion': 0, 'comedia': 1, 'romance': 1},
    'pelicula3': {'accion': 1, 'comedia': 1, 'romance': 0},
    # Agrega más elementos si es necesario
}


# Función para calcular similitud basada en contenido
def calcular_similitud(usuario, elemento):
    usuario_vector = np.array([usuario.get(caracteristica, 0) for caracteristica in usuario])
    elemento_vector = np.array([elemento.get(caracteristica, 0) for caracteristica in elemento])
    return cosine_similarity([usuario_vector], [elemento_vector])[0][0]

# Función para obtener recomendaciones para un usuario específico
def obtener_recomendaciones(usuario, usuarios, elementos):
    recomendaciones = {}
    for elemento in elementos:
        similitud_contenido = calcular_similitud(usuario, elementos[elemento])
        similitud_colaboracion = sum(usuarios[otro_usuario][elemento] for otro_usuario in usuarios if otro_usuario != usuario)
        puntaje_recomendacion = similitud_contenido + similitud_colaboracion
        recomendaciones[elemento] = puntaje_recomendacion
    return sorted(recomendaciones.items(), key=lambda x: x[1], reverse=True)

def use_rs():
    usuario_a_recomendar = 'Monk'
    recomendaciones = obtener_recomendaciones(usuarios[usuario_a_recomendar], usuarios, elementos)
    print(f'Recomendaciones para {usuario_a_recomendar}: {recomendaciones}')
    return recomendaciones, usuario_a_recomendar

