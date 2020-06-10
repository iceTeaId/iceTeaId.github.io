def install(package):
	try:
		import subprocess,sys
		subprocess.call([
	    sys.executable, "-m", "pip",
	    "-q", "install",'--upgrade pip', package])
	except Exception as yu:
		install('pip')
		print('Gagal Install',package,yu)
		

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

da=base64dcmpyl
def cmpyl(s):
	ca=base64cmpyl
	a=ca(s)
	b=ca(a)
	c=ca(b)
	d=ca(c)
	e=ca(d)
	return e
	

def dcmpyl(s):
	a=da(s)
	b=da(a)
	c=da(b)
	d=da(c)
	e=da(d)
	return e
	

if __name__=='__main__':
	print(__name__)
	