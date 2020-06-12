def kata():
	import itertools,sys,time
	from random import c
	a=input('Masukkan Kata :')
	b=int(len(a))
	code=itertools.product(a,repeat=b)
	c=b/64
	print(c)
	ll=0
	for i in code:
		rr=''
		if len(i) == b:
			ff=''.join(i)
			rr=rr+ff
	
		ll=ll+1
		sys.stdout.write(' \r%s '%(rr))
		if rr==a:
			break
		#time.sleep(c)

kata()
		