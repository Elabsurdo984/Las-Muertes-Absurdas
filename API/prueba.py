import requests

url = 'http://127.0.0.1:5000/muertes/29'

# Realizamos la solicitud GET a la API
response = requests.get(url)

print(response)

if response.status_code == 200:
    deaths = response.json()
    print(deaths)
else:
    print(f"Error al hacer la solicitud: {response.status_code}")