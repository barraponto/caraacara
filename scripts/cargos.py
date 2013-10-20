import json

with open('data.json') as stuff:
    data = json.load(stuff)
    cargos = [deputado['atividadeProfissional']
              for deputado in data.values()
              if 'atividadeProfissional' in deputado]

with open('cargos.json', 'w') as output:
    json.dump(cargos, output)
