import json
from urllib.request import urlopen
from itertools import chain


def get_data(json_url):
    with urlopen(json_url) as response:
        return json.loads(response.readall().decode('utf-8'))


def get_lideres(json_url):
    lideranca = get_data(json_url)
    return [unidade['lider']['id']
            for unidade in lideranca['list']]


exercicio_url = ('http://dadosabertos.almg.gov.br/'
                 'ws/deputados/em_exercicio?formato=json')
deputado_url = ('http://dadosabertos.almg.gov.br/'
                'ws/deputados/{0!s}?formato=json')
comissao_url = ('http://dadosabertos.almg.gov.br/'
                'ws/deputados/18847?formato=json')

exercicio = get_data(exercicio_url)
deputados = {deputado['id']:
             get_data(deputado_url.format(deputado['id']))['deputado']
             for deputado in exercicio['list']}

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

lideres = list(chain(*[get_lideres(url) for url in liderancas]))

data = [{'key': deputado['id'],
         'nome': deputado['nome'],
         'partido': deputado['partido'],
         'legislaturas': len(deputado['legislaturas']),
         'lider': deputado['id'] in lideres}
        for deputado in deputados.values()]

with open('../data.json', 'w') as output:
    json.dump(data, output)
