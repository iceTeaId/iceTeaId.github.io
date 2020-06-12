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


import http.server
import socketserver
import os

PORT = int(rd(range(5000,8999)))
ip=ipaddr()

web_dir = os.path.join(os.path.dirname(__file__), '')
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer((ip, PORT), Handler)
p='\x1b[1;33m',ip, ':','\x1b[1;32m',str(PORT),'\x1b[1;71m'
print('Connect :',''.join(p))
httpd.serve_forever()