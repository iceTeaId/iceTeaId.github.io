import socket

Host = 'ec2-54-151-177-35.ap-southeast-1.compute.amazonaws.com'


s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((Host, 19129))
#s.connect((socket.gethostname(),12346))
print('connect')
while True:
	full_msg = ''
    #inp=codec.encode(inp)
    #inp=bytes(input('input :'),'utf-8')
	while True:
    	#s.sendall(inp)
		msg = s.recv(8)
		print('connect')
		if len(msg) <= 0:
			break
		full_msg += msg.decode('utf-8')
    	

	if len(full_msg) > 0:
		print(full_msg)
