import socket,binascii

Host = 'ec2-54-151-177-35.ap-southeast-1.compute.amazonaws.com'

def bytes(gg):
	r=binascii.hexlify(gg.encode('utf-8'))#hex ke byte
	return r

def hexs(gg):
	u=binascii.unhexlify(gg).decode('utf-8')#byte ke hex
	return u

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((Host, 19129))
#s.connect((socket.gethostname(),12346))
while True:
	full_msg = ''
	inf=input('Input :')
	inp=bytes(inf)
	while True:
		s.sendall(inp)
		msg = s.recv(8)
		print('connect')
		if len(msg) <= 0:
			break
		print(hexs(msg))
		#full_msg += hexs(msg)
    	

	if len(full_msg) > 0:
		print(full_msg)