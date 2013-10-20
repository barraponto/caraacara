import json
from urllib.request import urlopen
from shutil import copyfileobj

img_url = 'http://www.almg.gov.br/opencms/export/sites/default/deputados/fotos/{0!s}.jpg'
exercicio_url = ('http://dadosabertos.almg.gov.br/'
                 'ws/deputados/em_exercicio?formato=json')

def get_data(json_url):
    with urlopen(json_url) as response:
        return json.loads(response.readall().decode('utf-8'))

def get_picture(key):
    with urlopen(img_url.format(key)) as pic_in, open('{0!s}.jpg'.format(key), 'wb') as pic_out:
        copyfileobj(pic_in, pic_out)


exercicio = get_data(exercicio_url)
for deputado in exercicio['list']:
    get_picture(deputado['id'])
