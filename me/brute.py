def brute2():
	import itertools,sys
	msk=input('Brute force ([1] manual [2] otomatis) :')
	if msk == '1':
		a=input("Enter kata :")
		c=input('Enter Nama Apapun :')
		d=input('Enter nomor :')
		e=input('Enter simbol :')
		b=int(input("Enter maksimum digit :"))
		kata=a+d+c+e
		res=itertools.product(a+c+d+e+a.upper()+c.upper(),repeat=b)
		lk=list()
		ll=0
		for i in res:
			rr=''
			if len(i) == b:
				ff=''.join(i)
				rr=rr+ff#+'\n'
				if len(a) >= 9:
					ff=''.join(i)
					rr=rr+ff+'\n'
				#elif rr not in lk:
					#lk.append(rr)
				sys.stdout.write(' \r%s '%(rr))
			ll=ll+1
		file = open('brute.txt','w')
		file.write(rr)
		file.close()
	elif msk == '2':
		import string
		b=int(input('Enter digit maksimal :'))
		code=itertools.product(string.ascii_letters+string.digits+string.punctuation,repeat=b)
		ll=0
		for i in code:
			rr=''
			if len(i) == b:
				ff=''.join(i)
				rr=rr+ff+'\n'
				if b >= 6:
					ff=''.join(i)
					rr=rr+ff+'\n'
			ll=ll+1
		file = open('brute.txt','w')
		file.write(rr)
		file.close()
		
brute2()