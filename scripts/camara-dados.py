#coding: utf-8
import json
from xml.etree import ElementTree
from urllib2 import urlopen
from contextlib import closing

detalhes = 'http://www.camara.gov.br/SitCamaraWS/Deputados.asmx/ObterDetalhesDeputado?ideCadastro={0}&numLegislatura='
lideres = 'http://www.camara.gov.br/SitCamaraWS/Deputados.asmx/ObterLideresBancadas'

with closing(urlopen(lideres)) as source:
    tree = ElementTree.parse(source)
root = tree.getroot()
lideranca = [lider.find('nome').text for lider in root.iter('lider')]

tree = ElementTree.parse('deputados.xml')
root = tree.getroot()

data = [{'key': deputado.find('ideCadastro').text,
         'nome': deputado.find('nomeParlamentar').text.encode('iso-8859-1').decode('utf-8').title(),
         'estado': deputado.find('UFEleito').text,
         'partido': deputado.find('LegendaPartidoEleito').text,
         'lider': deputado.find('nomeParlamentar').text.encode('iso-8859-1').decode('utf-8') in lideranca}
        for deputado in tree.iter('Deputado')
        if deputado.find('numLegislatura').text == '54']

for deputado in data:
    with closing(urlopen(detalhes.format(deputado['key']))) as source:
        tree = ElementTree.parse(source)
    root = tree.getroot()
    deputado['legislaturas'] = len([periodo for periodo in root.iter('periodoExercicio')])

with open('../data.json', 'w') as output:
    json.dump(data, output, indent=4)
