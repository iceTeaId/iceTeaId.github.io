import subprocess,random
rd=random.choice
uu=subprocess.getoutput(["ifconfig"])
aa=str(uu)
p=list(aa.split('\n'))
def ipaddr():
	for i in range(0,len(p)):
		if 'inet addr' and '255.255' in p[i]:
			ip1= p[i].split(' ') #[].strip().replace(' ','').replace('Mask','')
			return ip1[9]
def wlan():
	for i in range(0,len(p)):
		if 'wlan' in p[i]:
			ip1= p[i].split(':')[1].strip().replace(' ','').replace('Mask','')
			return ''.join(ip1)


import logging
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer
from pyftpdlib.authorizers import DummyAuthorizer
port=int(rd(range(1000,5000)))
port2=2000
authorizer = DummyAuthorizer()
authorizer.add_user('judin', '04091990', '.', perm='elradfmwMT')
handler = FTPHandler
handler.authorizer = authorizer

logging.basicConfig(filename='', level=logging.INFO)
ip=ipaddr()
print(ip,':',port)
server = FTPServer((ip, port), handler)
server.serve_forever()
