def compyl(phrase):
	code=list()
	cle=int(50) 
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
		
def decompyl(phrase): #TARGET HARUS DICOPY
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


if __name__=='__main__':
	print(__name__)