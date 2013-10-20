import json
from urllib.request import urlopen
from itertools import chain


def get_data(json_url):
    with urlopen(json_url) as response:
        return json.loads(response.readall().decode('utf-8'))


def get_lideres(json_url):
    lideranca = get_data(json_url)
    return [{unidade['lider']['id']: unidade['lider']['nome']}
            for unidade in lideranca['list']]


liderancas = [('http://dadosabertos.almg.gov.br/ws/'
               'representacao_partidaria/blocos/liderancas?formato=json'),
              ('http://dadosabertos.almg.gov.br/ws/'
               'representacao_partidaria/bancadas/liderancas?formato=json'),
              ('http://dadosabertos.almg.gov.br/ws/'
               'representacao_partidaria/governo/liderancas?formato=json'),
              ('http://dadosabertos.almg.gov.br/ws/'
               'representacao_partidaria/maioria/liderancas?formato=json'),
              ('http://dadosabertos.almg.gov.br/ws/'
               'representacao_partidaria/minoria/liderancas?formato=json')]

lideres = [get_lideres(url) for url in liderancas]

with open('lideres.json', 'w') as output:
    json.dump(list(chain(*lideres)), output)
