from . import _base as base
from . import _encodingGUA as encodingGUA
# Tanda '_' didepan fungsi = client class
def compile_marshal(w):
	try:
		import marshal
		ro=compile(w,'<script>','exec')
		ii=marshal.dumps(ro)
		return ii
	except:
		install('marshal')
		compile_marshal(w)
		
def base64cmpyl(s):
	try:
		import base64
		return base64.b64encode(s.encode()).decode()
	except Exception as t:
		print(t)
		install('base64')
		base64cmpyl(s)
		
def base64dcmpyl(s):
	try:
		import base64
		return base64.b64decode(s).decode()
	except:
		install('base64')
		base64dcmpyl(s)

def run_marshal(w):
	try:
		import marshal
		ii=exec(marshal.loads(w))
		return ii
	except:
		install('marshal')
		run_marshal(w)

def waktu_sekarang():
	try:
		from datetime import datetime
		now = datetime.now()
		bulan=now.month
		bln=int(bulan-1)
		dt=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
		e=dt[int(bln)]
		print("\rTanggal : %s %s %s / Jam : %s:%s:%s " % (now.day,e,now.year,now.hour,now.minute, now.second))
	except:
		install('datetime')
		waktu_sekarang()

def jam():
	try:
		from datetime import datetime
		now = datetime.now()
		print("\rJam : %s:%s:%s " % (now.hour,now.minute, now.second))
	except:
		install('datetime')
		jam()
		

def tanggal():
	try:
		from datetime import datetime
		now = datetime.now()
		bulan=now.month
		bln=int(bulan-1)
		dt=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
		e=dt[int(bln)]
		print("\rTanggal : %s %s %s" % (now.day,e,now.year))
	except:
		install('datetime')
		tanggal()
		 
def sisa_waktu(w):
	try:
		import sys,time
		for e in range(w+1):
			t = w-e
			l = '  Second              '
			sys.stdout.write('\rSisa Waktu : {0:0}'.format(t)+l)
			time.sleep(0.01)
	except Exception as ii:
		print(ii)
		install('sys')
		install('time')
		sisa_waktu(w)
	      
#INSTALL & UNINSTALL PIP
        
def install(package):
	try:
		import subprocess,sys
		subprocess.call([
	    sys.executable, "-m", "pip",
	    "-q", "install",'--upgrade pip', package])
	except Exception as yu:
		install('pip')
		print('Gagal Install',package,yu)
		
def uninstall(package):
	try:
		import subprocess,sys
		subprocess.call([
	    sys.executable, "-m", "pip",
	    "-q", "uninstall", package])
	except Exception as yu:
		print('Gagal uninstall',package,yu)


def berhitung(x):
	while x < x+1:
		print(x)
		
		
#IMAGE TO TEXT
def Ocr(pt):
	gb=buka_gambar(pt)
	try:
		import requests,json
		try:
			overlay=False
			payload = {'isOverlayRequired': overlay,
	               'apikey': '2a249f2bac88957',
	               'language': 'eng'
	               }
			r = requests.post('https://api.ocr.space/parse/image',files={'file01.jpg': gb},data=payload)
			pr = r.content.decode()
			pha = json.loads(pr)['ParsedResults'][0]['ParsedText']
			captcha = pha.replace('\r', '')#.replace('\n', '')#.replace("'",'').replace('_','').replace('.','').replace(',','').replace(' ','').replace('\'','').replace('$','').replace('@','')
	#	print('Captcha :',captcha)
		except Exception as i: 
			print('gagal',i)
			Ocr(pt)
	except:
		install('requests')
		install('json')
		Ocr(pt)
	
	return captcha

#OPEN & SAVE FILE
def buka_gambar(gambar):
	try:
		file=open(gambar,'rb+')
	except UnicodeDecodeError:
		file=open(gambar,'r')
	ii=file.read()
	return ii
	file.close()
	
def simpan(filenya,namafile):
	import time
	try:
		file = open(namafile,'w')
		file.write(filenya)
	except TypeError as e:
		file = open(namafile,'wb+')	
		file.write(filenya)
	print('tersimpan')
	buka_gambar(namafile)

def hitung_karakter(strng):
	o=0
	for x in strng:
		o+=1
	return o
  
def logo():
	def decompyl(phrase):
		code=list()
		cle=int(-50) #UNTUK KUNCI DECODE
		for el in phrase:
			if el.islower():
				r = ((ord(el) - ord('a')) + cle) % 26 + ord('a')
				code.append(chr(r))
			elif el.isupper():
				r = ((ord(el) - ord('A')) + cle) % 26 + ord('A')
				code.append(chr(r))
			else:
				code.append(el)
		return ''.join(code)

	b=decompyl('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')
	char=base.dcmpyl(b)
	try:
		import random,time,os
		ha=random.choice
		u=list(range(7000,9999))
		cr=list(range(30,36))
		kk=0
		while True:
			rc=ha(cr)
			yy=ha(u)
			for i in char:
				if i=='1':
					print('\x1b[1;'+str(rc)+'m'+chr(yy),end='')
				elif i=='0':
					print('\x1b[1;'+str(rc+1)+'m'+chr(yy+5),end='')
				elif i=='\n':
					print('')
			if kk == 10:
				break
			#print(' %s %s '%(yy,yy+1))
			kk+=1
			time.sleep(0.1)
			os.system('clear')
	except Exception as w:
		print(w)
		install('random')
		install('time')
		logo()
	
