import sys, subprocess, time, os
def install(package):
    subprocess.call([
    sys.executable, "-m", "pip",
    "-q", "install", package])
symbol = ['.     ','..    ','...   ','....   ','..... ']
def titik (l):
    for i in range(20):
        time.sleep(0.1)
        sys.stdout.write('\rloading '+l+ symbol[i %len(symbol)])
        
sybol = ['L ','Lo ','Loa ','Load ','Loadi ','Loadin ','Loading ','Loading   ','             ','                          ']
def tetek (l):
    for i in range(32):
        time.sleep(0.1)
        sys.stdout.write('\r '+sybol[i %len(sybol)]+l)
#LOADING
sym = ['|','/','-','\\']

def loading():
    for i in range(20):
        time.sleep(0.1)
        sys.stdout.write('\rloading '+ sym[i %len(sym)])
loading()
titik('Packet')
install('requests')
titik('Packet')
install('bs4')
titik('Packet')
install ('datetime')
titik('Packet')
install('mechanize')
import mechanize, requests, json, re
from bs4 import BeautifulSoup
from mechanize import Browser
from datetime import datetime
from data import em, ad
print('Ok')
br = mechanize.Browser()
br.set_handle_robots(False)
br.set_handle_refresh(mechanize._http.HTTPRefreshProcessor(), max_time=1)
br.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36')]
url ='https://hachwaclaims.xyz/faucet'


def respon():
	while True:
		try:
			yo = br.open(url)
			pp = yo.code
			log()
		except ConnectionError or ConnectionAbortedError or ConnectionRefusedError or ConnectionResetError as pp:
			print('Koneksi Error!!',pp)
		except Exception:
			pass
			br.open(url)
			break

def log():
	while True:
		try:
			email = em.email
			pwd = ad.add
			br._factory.is_html=True
			br.select_form(nr=0)
			br.form['email'] = email
			br.form['address'] = pwd
			titik('\rLogin')
			y=br.submit()
			print(' ok')
			break
		except br.error as w:
			print('\nError Bro!!',w)
		except Exception as yy:
			print('\nGagal Login',yy)
			br.open(url)
			time.sleep(1)
			break
			
def btc():
	try:
		y ='https://hachwaclaims.xyz/dashboard/'
		newurl2 = br.open(y)
		soup = BeautifulSoup(newurl2,'html.parser')
		tt = soup.find('input', {'class':'form-control mb-15','type':'text'}).get('value')
		yu =re.findall(r"[-+]?\d*\.\d+|\d+",tt)
		btc.ii = float(yu[0])
		if btc.ii > n:
			tanggal()
			print('\rCaptcha',capt.captcha,' ==>> Terkumpul :',tt)
		else:
			respon()
	except Exception:
		respon()

	
def formulir():
	for formulir in br.forms():
		print('Formulir :',formulir.name)
		print(formulir)
			
def capt():
	try:
		huha = 'https://hachwaclaims.xyz/captcha.php'
		fil = br.open(huha)
		pt = fil.read()
		overlay=False
		payload = {'isOverlayRequired': overlay,
               'apikey': '2a249f2bac88957',
               'language': 'eng'
               }
		r = requests.post('https://api.ocr.space/parse/image',files={'file01.png': pt},data=payload,)
		pr = r.content.decode()
		pha = json.loads(pr)['ParsedResults'][0]['ParsedText']
		capt.captcha = pha.replace('\r', '').replace('\n', '').replace("'",'').replace('_','').replace('.','').replace(',','').replace(' ','').replace('\'','').replace('$','').replace('@','')
#	print('Captcha :',captcha)
		br.back()
		try:
			br._factory.is_html=True
			br.select_form(nr=0)  
#		br.form['_token'] = tk
			br.form['captcha'] = capt.captcha
			br.submit()
#		print('\rMemgambil',captcha,'               ')
		except mechanize._mechanize.FormNotFoundError:
			w(600)
			respon()
		except mechanize._form_controls.ControlNotFoundError:
#		print('\rcoba lagi!!                                 ')
			tetek('GAS')
		except Exception:
			respon()
	except Exception:
		respon()

def tulisan_jalan():
    os.system('clear')
    angka =  99999
    for e in range(angka+1):
        t = angka-e
        sys.stdout.write('\rScript By : {0:0}'.format(t))
        time.sleep(0.00000000000000001)
        if e == 48792:
        	os.system('clear')
        	print('Script By : 51207')
        	break
		
def tanggal():
    now = datetime.now()
    print("\rTanggal :%s/%s/%s Jam :%s:%s:%s " % (now.month,now.day,now.year,now.hour,now.minute, now.second))
    
def w(waktu):
    waktu =  waktu
    for e in range(waktu+1):
        t = waktu-e
        l = '  Second              '
        sys.stdout.write('\rSisa Waktu : {0:0}'.format(t)+l)
        time.sleep(0.01)

respon()
y ='https://hachwaclaims.xyz/dashboard/'
newurl2 = br.open(y)
soup = BeautifulSoup(newurl2,'html.parser')
tt = soup.find('input', {'class':'form-control mb-15','type':'text'}).get('value')
os.system('clear')
#tulisan_jalan()
print('email	:',em.email,'\naddress	:',ad.add,'\nBalance	:',tt)
yu =re.findall(r"[-+]?\d*\.\d+|\d+",tt)
btc.ii = float(yu[0])
n=btc.ii
capt()
while True:
	try:
		respon()
		btc()
		capt()
		n=btc.ii
	except Exception:
		pass
	time.sleep(1)
